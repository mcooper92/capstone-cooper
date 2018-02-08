const elasticSearch = require('elasticsearch');

const client = new elasticSearch.Client({
  hosts: 'http://elastic:@18.144.17.51:9200',
});

client.cluster.health({}, (err, resp) =>
  console.log('-- Client Health --', resp),
);



const check = (asin) =>
  client
    .get({
      index: 'Nile',
      type: 'products',
      id: asin,
    })
    .then((error) => {
      return true;
    })
    .catch((error) => {
      return false;
    });

const insertIntoDB = (asin, name, description, categories, brand, price) =>
  client
    .index({
      index: 'nozama',
      id: asin,
      type: 'products', // type inside index (table inside database)
      body: {
        name,
        description,
        categories,
        brand,
        price,
      },
    })
    .then(() => console.log(`inserted ${asin}`));

module.exports = { insertIntoDB, check, client };