import { getLeagueTeamManagers, loadPlayers } from '$lib/utils/helper';

export async function load({ fetch }) {
  try {
    // ✅ FantasyCalc
    const fcRes = await fetch(
      'https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1'
    );

    const fantasyValues = await fcRes.json();

    // ✅ Your league data (IMPORTANT: don't break it)
    const leagueTeamManagersData = getLeagueTeamManagers();
    const playersData = loadPlayers(fetch);

    return {
      fantasyValues,
      leagueTeamManagersData,
      playersData
    };

  } catch (err) {
    console.error('POWER PAGE ERROR:', err);

    return {
      fantasyValues: { players: [] },
      leagueTeamManagersData: [],
      playersData: []
    };
  }
}
