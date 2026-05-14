<script>
  import { waitForAll } from '$lib/utils/helper';

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

{#await waitForAll(data.playersData)}
  <p>Loading Power Rankings...</p>

{:then [players]}

  {@const fantasyValues = data.fantasyValues}
  {@const fcPlayers = fantasyValues.players || []}
  {@const managers = data.leagueTeamManagersData || []}

  {@const valueMap = Object.fromEntries(
    fcPlayers.map(p => [p.player.sleeperId, p.value])
  )}

  {@const teams = (() => {
    const t = {};

    players.forEach(player => {
      const teamId = player.roster_id;

      if (!t[teamId]) {
        const manager = managers.find(m => m.roster_id === teamId);

        t[teamId] = {
          manager: manager?.name || `Team ${teamId}`,
          players: [],
          total: 0,
          positions: {}
        };
      }

      const playerId =
        player.player_id || player.playerId || player.id;

      const value = valueMap[playerId] || 0;

      t[teamId].players.push({
        name: player.full_name || player.name,
        position: player.position,
        value
      });

      t[teamId].total += value;

      if (!t[teamId].positions[player.position]) {
        t[teamId].positions[player.position] = 0;
      }

      t[teamId].positions[player.position] += value;
    });

    return Object.values(t);
  })()}

  {#each teams.sort((a, b) => {
    const getVal = (team) =>
      selectedPosition === 'ALL'
        ? team.total
        : team.positions[selectedPosition] || 0;

    return getVal(b) - getVal(a);
  }) as team, i}

    <div
      on:click={() => openTeam = openTeam === team ? null : team}
      style="cursor: pointer; margin: 10px 0;"
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

{:catch err}
  <p>Error loading data</p>
{/await}
``
