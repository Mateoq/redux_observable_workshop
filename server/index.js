// Server.

const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server();

server.connection({
  port: 8080,
  host: 'localhost',
  routes: { cors: true }
});

server.route({
  method: 'POST',
  path: '/login',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  },
  handler: (request, reply) => {
    console.log('REQUEST', request.payload);
    const { username } = request.payload;

    if (username === 'mquintero') {
      return reply({ message: 'Welcome' });
    }

    return reply(Boom.unauthorized('Invalid username or password'));
  }
});

server.start((err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Server running at: ${server.info.uri}`);
});
