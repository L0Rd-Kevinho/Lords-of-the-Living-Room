export async function load() {
  try {
    const res = await fetch('https://api.fantasycalc.com/values/current');

    if (!res.ok) {
      console.error('FantasyCalc fetch failed:', res.status);
      return { fantasyValues: [] };
    }

    const fantasyValues = await res.json();

    return {
      fantasyValues: fantasyValues || []
    };

  } catch (err) {
    console.error('FantasyCalc error:', err);

    return {
      fantasyValues: []
    };
  }
}
