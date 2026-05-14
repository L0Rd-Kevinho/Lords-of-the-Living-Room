import { waitForAll } from '$lib/utils/helper';

export async function load() {
  try {
    const fcRes = await fetch(
      'https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1'
    );

    const fantasyValues = await fcRes.json();

    // ✅ reuse your existing league loaders
    const playersData = [];           // replace with your real function
    const leagueTeamManagersData = []; // replace with your real function

    return {
      fantasyValues,
      playersData,
      leagueTeamManagersData
    };

  } catch (err) {
    console.error(err);

    return {
      fantasyValues: { players: [] },
      playersData: [],
      leagueTeamManagersData: []
    };
  }
}
