<script>
  export let data;

  // FantasyCalc data
  const fcData = data.fantasyValues.players || [];

  // Build value map using sleeperId (CRITICAL)
  const valueMap = {};
  fcData.forEach(p => {
    valueMap[p.player.sleeperId] = p.value;
  });

  // ✅ IMPORTANT: plug in your real playersData here
  const players = data.playersData || [];
  const managers = data.leagueTeamManagersData || [];

  // Build teams
  function buildTeams(players) {
    const teams = {};

    players.forEach(player => {
      const teamId = player.roster_id;

      if (!teams[teamId]) {
        const manager = managers.find(m => m.roster_id === teamId);

        teams[teamId] = {
          teamId,
          manager: manager?.name || `Team ${teamId}`,
          players: [],
          total: 0,
          positions: {}
        };
      }

      const value = valueMap[player.player_id] || 0;

      const enriched = {
        name: player.full_name,
        position: player.position,
        value
      };

      teams[teamId].players.push(enriched);

      teams[teamId].total += value;

      if (!teams[teamId].positions[player.position]) {
        teams[teamId].positions[player.position] = 0;
      }

      teams[teamId].positions[player.position] += value;
    });

    return Object.values(teams);
  }

  let teams = buildTeams(players);

  let selectedPosition = 'ALL';
  let openTeam = null;

  function getValue(team) {
    if (selectedPosition === 'ALL') return team.total;
    return team.positions[selectedPosition] || 0;
  }
</script>

<h1>Dynasty Power Rankings</h1>

<!-- ✅ FILTER -->
<select bind:value={selectedPosition}>
  <option value="ALL">All</option>
  <option value="QB">QB</option>
  <option value="RB">RB</option>
  <option value="WR">WR</option>
  <option value="TE">TE</option>
</select>

<!-- ✅ TEAM RANKINGS -->
{#each teams.sort((a, b) => getValue(b) - getValue(a)) as team, i}
  <div
    on:click={() => openTeam = openTeam === team ? null : team}
    style="cursor: pointer; margin: 10px 0;"
  >
    <h3>#{i + 1} {team.manager}</h3>
    <p>Total Value: {Math.round(getValue(team))}</p>

    <!-- ✅ EXPAND TEAM -->
    {#if openTeam === team}
      <ul>
        {#each team.players.sort((a, b) => b.value - a.value) as p}
          <li>
            {p.name} ({p.position}) — {Math.round(p.value)}
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <hr />
{/each}
