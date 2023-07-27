'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  let state = new AppState();
  state.loadItems();
  let productNames = [];
  let productTimesShown = [];
  let productTimesClicked = [];
  for (let index = 0; index < state.allProducts.length; index++) {
    productNames[index] = state.allProducts[index].name;
    productTimesShown[index] = state.allProducts[index].timesShown;
    productTimesClicked[index] = state.allProducts[index].timesClicked;
  }
  let chartResults ={
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Times Shown',
        data: productTimesShown,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1
      },
      {
        label: '# of Times Clicked',
        data: productTimesClicked,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(canvasElem, chartResults);
}


renderChart();
