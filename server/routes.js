const Router = require('koa-router');
const router = new Router();

const db = require('../database/controllers/index.js');
const recs = require('./controllers/recommendations.js');


router.post('/events', (ctx) => {
  const validEvents = {
    'impression': true, 
    'engage': true, 
    'start': true, 
    'pause': true, 
    'complete': true,
    'resume': true,
    'up': true,
    'down': true
  };

  const event = ctx.request.body;
  
  if (validEvents[event.action]) {
    db.addUserEvent(event.user_id, event.movie_id, event.algorithm_id, event.action, event.x, event.y);

    if (event.action === 'complete') {
      recs.addToCompletions(event.user_id, event.movie_id);
    }

    ctx.body = `OK`;
  } else {
    ctx.status = 400;
  }
});


module.exports = router;