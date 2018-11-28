require('dotenv').config();

const CIO = require('customerio-node');
const csv = require('csvtojson');

const cio = new CIO(process.env.SITE_ID, process.env.API_KEY);

csv().fromFile('contacts.csv').then((contacts) => {
  contacts.forEach((contact) => {
    let { id, first_name, email } = contact;

    cio.identify(id, { first_name, email });
  });
});
