'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  if (votingRounds === 0) {
    let stringifedProducts = JSON.stringify(this.allProducts);
    localStorage.setItem('myProducts',stringifedProducts);
  }
}

AppState.prototype.loadItems = function () {
  let retrieveData = localStorage.getItem('myProducts');
  let parsedData = JSON.parse(retrieveData);

  if (retrieveData) {
    for (let i = 0; i < parsedData.length; i++) {
      if (parsedData[i].name === 'sweep') {
        let rebuiltSweep = new Product(parsedData[i].name, 'png');
        rebuiltSweep.timesShown = parsedData[i].timesShown;
        rebuiltSweep.timesClicked = parsedData[i].timesClicked;
        this.allProducts.push(rebuiltSweep);
      } else {
        let rebuiltProducts = new Product(parsedData[i].name);
        rebuiltProducts.timesShown = parsedData[i].timesShown;
        rebuiltProducts.timesClicked = parsedData[i].timesClicked;
        this.allProducts.push(rebuiltProducts);
      }
    }
  } else {
    this.instantiateProducts();

  }

}

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
