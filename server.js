const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
const HapiReactViews = require('hapi-react-views');
const path = require('path');

require('babel-core/register')({
  presets: ['react', 'es2015']
});

const server = new Hapi.Server();
server.connection({port: 3000});

server.register([
  Inert, Vision
], (err) => {
  if (err) {
    console.log('Failed to load vision.');
  }

  server.route({
    method: 'GET',
    path: '/dist/client.js',
    handler: {
      file: path.join(__dirname, './dist/client.js')
    }
  });

  server.views({
    engines: {
      jsx: HapiReactViews
    },
    relativeTo: __dirname,
    path: 'components',
    compileOptions: {
      renderMethod: 'renderToString',
      layoutPath: path.join(__dirname, 'components'),
      layout: 'layout'
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

      const context = {
        foo: 'baz'
      };
      context.state = 'window.state = ' + JSON.stringify(context) + ';';

      reply.view('app', context);
    }
  });

  server.route({
    method: 'GET',
    path: '/login',
    handler: (request, reply) => {
      const context = {
        foo: 'loggin'
      };
      context.state = 'window.state = ' + JSON.stringify(context) + ';';
      reply.view('login', context);
    }
  });

  server.start(err => {
    if (err) {
      throw err;
    }

    console.log(`Server running at ${server.info.uri}`);
  });
});
