const {
    createHistogram,
    performance: {
      timerify
    }
  } = require('perf_hooks');
  
  const uuid = require('uuid');
  const { randomUUID } = require('crypto');
  
  const h1 = createHistogram();
  const h2 = createHistogram();
  
  const t1 = timerify(() => uuid.v4(), { histogram: h1 });
  const t2 = timerify(() => randomUUID(), { histogram: h2 });
  
  for (let n = 0; n < 1e6; n++) t1();
  for (let n = 0; n < 1e6; n++) t2();
  
  console.log(h1.mean, h1.max, h1.min);
  console.log(h2.mean, h2.max, h2.min);