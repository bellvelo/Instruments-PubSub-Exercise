const PubSub = require('../helpers/pub_sub.js');

const InstrumentView = function(container){
  this.container = container;
  };

InstrumentView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instruments', (event) => { // <= instrument_families(object)
    const instrument = event.detail; // object
    this.render(instrument)
    // console.log("hello from instrument view");
  })
};
InstrumentView.prototype.render = function (instrument) {
  const infoHeader = document.createElement('h1');
  const infoSubtitle = document.createElement('h3')
  const infoParagraph = document.createElement('h4')
  //
  infoHeader.textContent = `${instrument.name}`
  infoSubtitle.textContent = `${instrument.description}`
  infoParagraph.textContent = `${instrument.name} instruments include:  ${instrument.instruments}`

  this.container.innerHTML = ''; // clears out the HTML element.
  this.container.appendChild(infoHeader);
  this.container.appendChild(infoSubtitle);
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentView;
