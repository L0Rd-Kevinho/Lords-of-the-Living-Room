<script>
    export let leagueData;
    export let rosterData;
    export let leagueTeamManagers;
    export let playersInfo;
    export let fantasyValues;

    // ✅ Build value map safely
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

{#if rosterData && playersInfo}

    {#each rosterData as roster}
        <div class="team">

            <!-- ✅ Team Name -->
            <h3>
                {leagueTeamManagers?.find(m => m.roster_id === roster.roster_id)?.name 
                    || `Team ${roster.roster_id}`}
            </h3>

            <!-- ✅ SAFE check BEFORE looping -->
            {#if roster.players && Array.isArray(roster.players)}

                {#each roster.players as playerId}

                    {@const player = playersInfo[playerId]}

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

            {:else}
                <p>No players found</p>
            {/if}

        </div>
    {/each}

{:else}
    <p>Loading roster display...</p>
{/if}
