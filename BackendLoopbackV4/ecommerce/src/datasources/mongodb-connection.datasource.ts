import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodbConnection',
  connector: 'mongodb',
  url: 'mongodb://127.0.0.1:27017',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'ecommerceDb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbConnectionDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodbConnection';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodbConnection', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
