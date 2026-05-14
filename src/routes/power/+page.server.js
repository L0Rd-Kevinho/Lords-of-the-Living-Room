export async function load() {
  try {
    const res = await fetch(
      'https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1'
    );

    if (!res.ok) {
      console.error('Failed:', res.status);
      return { fantasyValues: [] };
    }

    const data = await res.json();

    return {
      fantasyValues: data
    };

  } catch (err) {
    console.error(err);
    return {
      fantasyValues: []
    };
  }
}
``
