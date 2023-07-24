<!-- GeneInteractionPage.svelte -->
<script>
  import GeneInteractionPlot from './GeneInteractionPlot.svelte';

  // Fetch the gene interaction data
  let geneInteractionData;
  fetch('https://vda-lab.github.io/assets/interactions.json')
    .then((response) => response.json())
    .then((data) => {
      geneInteractionData = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
</script>

<main>
  <h1>Gene Interaction Data Plot</h1>
  {#if geneInteractionData}
    <GeneInteractionPlot {geneInteractionData} />
  {:else}
    <p>Loading gene interaction data...</p>
  {/if}
</main>

<style>
  /* Add styling for the component here */
</style>
