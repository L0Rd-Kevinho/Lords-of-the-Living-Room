<script>
    export let leagueData;
    export let rosterData;
    export let leagueTeamManagers;
    export let playersInfo;
    export let fantasyValues;

    // ✅ Build value map from FantasyCalc
    const fcPlayers = fantasyValues?.players || [];

    const valueMap = {};
    fcPlayers.forEach(p => {
        valueMap[p.player.sleeperId] = p.value;
    });
</script>

<style>
    .team {
        margin-bottom: 30px;
    }

    .team h3 {
        margin-bottom: 10px;
    }

    .playerRow {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        border-bottom: 1px solid #eee;
    }

    .playerName {
        font-weight: 500;
    }

    .playerValue {
        color: #555;
    }

    .position {
        margin-left: 6px;
        color: #888;
        font-size: 0.9em;
    }
</style>

<!-- ✅ LOOP THROUGH TEAMS -->
{#each rosterData as roster}
    <div class="team">

        <!-- ✅ TEAM NAME -->
        <h3>
            {leagueTeamManagers.find(m => m.roster_id === roster.roster_id)?.name || `Team ${roster.roster_id}`}
        </h3>

        <!-- ✅ PLAYERS -->
        {#each roster.players as playerId}
            {@const player = playersInfo[playerId]}

            <div class="playerRow">
                <span class="playerName">
                    {player?.full_name || player?.name || 'Unknown'}
                    <span class="position">({player?.position || ''})</span>
                </span>

                <span class="playerValue">
                    {Math.round(valueMap[playerId] || 0)}
                </span>
            </div>
        {/each}

    </div>
{/each}
