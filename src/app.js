const data = require('./data/instrument_data.js')
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentView = require('./views/instrument_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const selectInstrument = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectInstrument);
  // console.log("Instrument loaded");
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#selected');
  const instrumentDisplay = new InstrumentView(infoDiv);
  instrumentDisplay.bindEvents();
  console.log(infoDiv);

  const families = new InstrumentFamilies(data);
  console.log('JavaScript Loaded');
  // console.dir(families);
  families.bindEvents();


});
