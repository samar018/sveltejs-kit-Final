<!-- GeneInteractionPlot.svelte -->
<script>
  import { onMount } from 'svelte';
  import Plotly from 'plotly.js-dist';

  export let geneInteractionData;
  
  // Function to create the plot
  const createPlot = () => {
    // Extract data for plotting from the geneInteractionData
    // Here, you need to specify how to extract the relevant data for your plot
    // For example, assuming the data has "from_id" and "to_id" properties:
    const fromIds = geneInteractionData.map((interaction) => interaction.from_id);
    const toIds = geneInteractionData.map((interaction) => interaction.to_id);

    const trace = {
      x: fromIds,
      y: toIds,
      mode: 'markers',
      type: 'scatter',
      marker: {
        size: 10,
        color: 'blue',
      },
    };

    const data = [trace];
    const layout = {
      title: 'Gene Interaction Plot',
      xaxis: {
        title: 'From ID',
      },
      yaxis: {
        title: 'To ID',
      },
    };

    Plotly.newPlot('gene-interaction-plot', data, layout);
  };

  onMount(() => {
    createPlot();
  });
</script>

<main>
  <h1>Gene Interaction Data Plot</h1>
  <div id="gene-interaction-plot"></div>
</main>

<style>
  /* Add styling for the component here */
  #gene-interaction-plot {
    width: 100%;
    height: 400px;
  }
</style>
