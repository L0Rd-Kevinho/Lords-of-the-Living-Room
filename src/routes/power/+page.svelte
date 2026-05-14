<script>
  export let data;
</script>

<h1>Dynasty Rankings</h1>

<p>Total players: {data.fantasyValues.length}</p>

<pre>
{JSON.stringify(data.fantasyValues[0], null, 2)}
</pre>
``
