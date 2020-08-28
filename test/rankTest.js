const rankTest = require('ava');
const { voyageRisk, captainHistoryRisk, voyageProfitFactor, rating } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('voyageRisk case 1. should return 1 when voyageRisk given voyage length equals 4.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})

rankTest('voyageRisk case 2. should return 3 when voyageRisk given voyage length equals 8.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 8,
  };
  const result = voyageRisk(voyage)

  t.is(result, 3);
})

rankTest('voyageRisk case 3. should return 4 when voyageRisk given voyage length equals 9.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage)

  t.is(result, 4);
})

rankTest('voyageRisk case 4. should return 5 when voyageRisk given voyage zone is china and length equals 4.', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 5);
})

rankTest('voyageRisk case 5. should return 5 when voyageRisk given zone is china and length is 5.', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = voyageRisk(voyage)

  t.is(result, 7);
})

rankTest('voyageRisk case 6. should return 9 when voyageRisk given zone is china and length is 10.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const result = voyageRisk(voyage)

  t.is(result, 9);
})

