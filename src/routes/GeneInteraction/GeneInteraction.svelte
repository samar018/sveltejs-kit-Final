<!-- GeneInteraction.svelte -->
<script>
  let geneInteractionData;
  let downloadProgress = 0;

  // Function to handle the download button click
  const handleDownload = async () => {
    try {
      const response = await fetch('https://vda-lab.github.io/assets/interactions.json');
      const jsonData = await response.json();
      const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      const url = URL.createObjectURL(jsonBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'interactions.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to fetch the data
  const fetchData = async () => {
    try {
      const response = await fetch('https://vda-lab.github.io/assets/interactions.json');
      geneInteractionData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  // Fetch the data when the component mounts
  fetchData();

  // Function to handle the link click
  const handleLinkClick = () => {
    // Use Svelte's page store to navigate to the GeneInteractionPage
    $page.goto('/GeneInteractionPage');
  };
</script>

<main>
  <h1>Gene Interaction Data Display Page</h1>
  {#if geneInteractionData}
    <!-- Add a link to navigate to the GeneInteractionPage -->
    <a href="/GeneInteractionPage" on:click|preventDefault={handleLinkClick}>Go to Gene Interaction Page</a>
    <button on:click={handleDownload}>Download Data</button>
    <div class="progress-bar">
      <div class="progress" style="width: {downloadProgress}%"></div>
    </div>
  {:else}
    <p>Loading gene interaction data...</p>
  {/if}
</main>

<style>
  /* Add styling for the component here */
  .progress-bar {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 20px;
    margin-top: 10px;
    overflow: hidden;
  }

  .progress {
    background-color: #4CAF50;
    height: 100%;
    transition: width 0.2s ease-in;
  }
</style>
