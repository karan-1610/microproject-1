document.addEventListener('DOMContentLoaded', () => {
  const fetchDataButton = document.getElementById('fetchDataButton');
  const dataContainer = document.getElementById('dataContainer');

  fetchDataButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      displayData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  function displayData(data) {
    // Format and display data on the page
    dataContainer.innerHTML = JSON.stringify(data, null, 2);
  }
});
