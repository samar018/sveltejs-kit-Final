<script>
  export let interactionsData; // To receive the interactions data as props from the route module
</script>

<main>
  <h1>Gene Interactions Data</h1>
  {#if interactionsData}
    <table>
      <thead>
        <tr>
          <th>Gene ID</th>
          <th>Interactions</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(interactionsData) as [geneID, interactions]}
          <tr>
            <td>{geneID}</td>
            <td>
              {#each interactions as interaction}
                <p>{interaction}</p>
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>Loading gene interactions data...</p>
  {/if}
</main>

<style>
  /* Add styling for the component here */
</style>
