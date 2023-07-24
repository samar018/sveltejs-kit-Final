<!-- Add the necessary imports -->
<script>
  import { load } from './GeneInteraction.js';
  import GeneInteraction from './GeneInteraction.svelte';

  // Fetch gene interactions data using the load function
  let interactionsData;
  load().then((data) => {
    interactionsData = data.interactionsData;
  });
</script>

<main>
  {#if interactionsData}
    <GeneInteraction interactionsData={interactionsData} />
  {:else}
    <p>Loading gene interactions data...</p>
  {/if}
</main>

<style>
  /* Add styling for the component here */
</style>
