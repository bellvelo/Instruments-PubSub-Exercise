const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data; // array of objects
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instruments', this.data); // => select_view(array of objects)

  PubSub.subscribe('SelectView:change',(event) => { // <= select_view(index number)
    const selectedIndex = event.detail; // index number
    // debugger;
    this.publishInstrumentInfo(selectedIndex);
    console.log("hello from instrument fams");

  })
};

InstrumentFamilies.prototype.publishInstrumentInfo = function (instrumentIndex) {
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instruments', selectedInstrument) // =>instrument_view (object)

};
module.exports = InstrumentFamilies;
