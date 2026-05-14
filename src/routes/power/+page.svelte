<script>
  export let data;

  const players = data.fantasyValues.players || [];
</script>

<h1>Dynasty Rankings</h1>

<p>Players loaded: {players.length}</p>

<pre>
{JSON.stringify(players[0], null, 2)}
</pre>
