import {
  getLeagueData, 
  getLeagueRosters, 
  getLeagueTeamManagers, 
  loadPlayers, 
  waitForAll 
} from '$lib/utils/helper';

export async function load({ fetch }) {

    const rostersInfo = waitForAll(
        getLeagueData(),
        getLeagueRosters(),
        getLeagueTeamManagers(),
        loadPlayers(fetch),
    );

    // ✅ ADD THIS RIGHT HERE
    const fantasyValues = fetch(
        'https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1'
    ).then(res => res.json());

    return {
        rostersInfo,
        fantasyValues   // ✅ ADD THIS
    };
}
