import express from 'express';
import config from 'config';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import winston from 'winston';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const development = config.get('nodeEnv') !== 'production';

app.set('port', config.get('port'));
app.disable('x-powered-by');
app.use(cors());
app.use(compression());

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.locals.pretty = development;
app.use(morgan(development ? 'dev' : 'combined'));

app.listen(config.get('port'), () => winston.info('Listening on port %d', config.get('port')));
