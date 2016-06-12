import { createApp } from 'mantra-plus';
import initContext from './configs/context';
import createRedux from 'mantra-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// modules
import coreModule from './modules/core';

// create context
const context = initContext();

// create redux
const logger = createLogger();
const middlewares = [
  thunk,
  logger,
];
const redux = createRedux({
  middlewares,
});

// create app
const app = createApp(context);
app.loadMiddlewares([
  redux,
]);
app.loadModule(coreModule);
app.init();
