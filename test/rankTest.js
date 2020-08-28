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

rankTest('voyageProfitFactor case 7. should return 2 when voyageProfitFactor given zone is west-indies and history length is 2 and voyage length is 10.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 2);
})

rankTest('voyageProfitFactor case 8. should return 1 when voyageProfitFactor given zone is west-indies and history length is 2 and voyage length is 15.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 1);
})

rankTest('voyageProfitFactor case 9. should return 2 given zone is west-indies and history length is 9 and voyage length is 15.', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
    {
      zone: 'east-indies2',
      profit: 5,
    },
    {
      zone: 'east-indies3',
      profit: 5,
    },
    {
      zone: 'east-indies4',
      profit: 5,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },
    {
      zone: 'east-indies6',
      profit: 5,
    },
    {
      zone: 'east-indies7',
      profit: 5,
    },
    {
      zone: 'east-indies8',
      profit: 5,
    },
    {
      zone: 'east-indies9',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 2);
})

rankTest('voyageProfitFactor case 10. should return 3 given zone is china and history no hasChina and history length is 1 and voyage length is 10.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 3);
})

rankTest('voyageProfitFactor case 11. should return 7 given zone is china and history hasChina and history length is 11 and voyage length is 19.', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies1',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 5,
    },
    {
      zone: 'east-indies2',
      profit: 5,
    },
    {
      zone: 'east-indies3',
      profit: 5,
    },
    {
      zone: 'east-indies4',
      profit: 5,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },
    {
      zone: 'east-indies6',
      profit: 5,
    },
    {
      zone: 'east-indies7',
      profit: 5,
    },
    {
      zone: 'east-indies8',
      profit: 5,
    },
    {
      zone: 'east-indies9',
      profit: 5,
    },
    {
      zone: 'east-indies10',
      profit: 5,
    },


  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 7);
})

rankTest('voyageProfitFactor case 12. should return 4 given zone is east-indies and history no hasChina and history length is 1 and voyage length is 10.', t => {
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
  ]

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 3);
})


rankTest('captainHistoryRisk case 13. should 4 given history length is 3 and history profit < 0 is 1 and voyage zone is china and history hasChina.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: -1,
    },{
      zone: 'china',
      profit: 2,
    },
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 4);
})

rankTest('captainHistoryRisk case 14. should return 1 given history length is 5 and history profit < 0 is 0 and voyage zone is china and history no hasChina.', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 1,
    },{
      zone: 'west-indies1',
      profit: 2,
    },
    {
      zone: 'west-indies2',
      profit: 2,
    },
    {
      zone: 'west-indies3',
      profit: 2,
    },
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 1);
})