<script>
  import LinearProgress from '@smui/linear-progress';

  export let data;

  let selectedPosition = 'ALL';
  let openTeam = null;
</script>

<h1>Dynasty Power Rankings</h1>

<select bind:value={selectedPosition}>
  <option value="ALL">All</option>
  <option value="QB">QB</option>
  <option value="RB">RB</option>
  <option value="WR">WR</option>
  <option value="TE">TE</option>
</select>

{#await data.rostersInfo}
  <div style="width:85%;margin:80px auto;">
    <p>Loading Power Rankings...</p>
    <LinearProgress indeterminate />
  </div>

{:then [leagueData, rosterData, leagueTeamManagers, playersInfo]}

  {@const fcPlayers = data.fantasyValues.players || []}

  <!-- ✅ Build value map -->
  {@const valueMap = Object.fromEntries(
    fcPlayers.map(p => [p.player.sleeperId, p.value])
  )}

  <!-- ✅ Build teams from rosterData -->
  {@const teams = rosterData.map(roster => {
    const manager = leagueTeamManagers.find(m => m.roster_id === roster.roster_id);

    const players = roster.players.map(playerId => {
      const p = playersInfo[playerId];

      return {
        name: p?.full_name || p?.name || 'Unknown',
        position: p?.position || '',
        value: valueMap[playerId] || 0
      };
    });

    const total = players.reduce((sum, p) => sum + p.value, 0);

    const positions = {};
    players.forEach(p => {
      if (!positions[p.position]) positions[p.position] = 0;
      positions[p.position] += p.value;
    });

    return {
      manager: manager?.name || `Team ${roster.roster_id}`,
      players,
      total,
      positions
    };
  })}

  <!-- ✅ Rankings -->
  {#each teams.sort((a, b) => {
    const getVal = (team) =>
      selectedPosition === 'ALL'
        ? team.total
        : team.positions[selectedPosition] || 0;

    return getVal(b) - getVal(a);
  }) as team, i}

    <div
      on:click={() => openTeam = openTeam === team ? null : team}
      style="cursor:pointer;margin:10px 0;"
    >
      <h3>#{i + 1} {team.manager}</h3>

      <p>
        Value:
        {Math.round(
          selectedPosition === 'ALL'
            ? team.total
            : team.positions[selectedPosition] || 0
        )}
      </p>

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

{:catch error}
  <p>Error loading data: {error.message}</p>
{/await}
