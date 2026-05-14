export async function load() {
  const res = await fetch('https://api.fantasycalc.com/values/current');

  if (!res.ok) {
    throw new Error('Failed to fetch FantasyCalc data');
  }

  const fantasyValues = await res.json();

  return {
    fantasyValues
  };
}
``
