<script>
    export let leagueData;
    export let rosterData;
    export let leagueTeamManagers;
    export let playersInfo;
    export let fantasyValues;

    // ✅ Build value map
    const fcPlayers = fantasyValues?.players || [];

    const valueMap = {};
    fcPlayers.forEach(p => {
        valueMap[String(p.player.sleeperId)] = p.value;
    });
</script>

<style>
    .team {
        margin-bottom: 25px;
    }

    .playerRow {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
    }

    .name {
        font-weight: 500;
    }
</style>

<!-- ✅ LOOP TEAMS (same as your original pattern) -->
{#each rosterData as roster}
    <div class="team">

        <h3>
            {leagueTeamManagers?.find(m => m.roster_id === roster.roster_id)?.name 
                || `Team ${roster.roster_id}`}
        </h3>

        <!-- ✅ LOOP PLAYERS -->
        {#each roster.players || [] as playerId}

            {@const player = playersInfo?.[playerId]}

            <div class="playerRow">
                <span class="name">
                    {player?.full_name || player?.name || 'Unknown'}
                    ({player?.position || ''})
                </span>

                <span>
                    {Math.round(valueMap[String(playerId)] || 0)}
                </span>
            </div>

        {/each}

    </div>
{/each}
