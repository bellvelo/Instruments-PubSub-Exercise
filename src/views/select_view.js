const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:all-instruments', (event) => { // <= instrument_families
    const allInstruments = event.detail; // array of objects
    this.populate(allInstruments) // takes the array of objects and populates the drop down as per the poulate method.
    // debugger;
  });

  this.element.addEventListener('change', (event) => { // listens out for the dropdown being selected.
    const selectedIndex = event.target.value;  // index number
    // debugger;
    PubSub.publish('SelectView:change', selectedIndex); // => instrument_families(index number)
    console.log("hello from the select view");
    // debugger;
  })
};

SelectView.prototype.populate = function(instrumentsData) {
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option)
  })
};

module.exports = SelectView;
