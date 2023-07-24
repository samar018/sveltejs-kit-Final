export const load = async ({ fetch }) => {
  try {
    const response = await fetch('https://vda-lab.github.io/assets/interactions.json');
    const data = await response.json();
    return { interactionsData: data };
  } catch (error) {
    console.error('Error fetching gene interactions data:', error);
    return { interactionsData: null };
  }
};
