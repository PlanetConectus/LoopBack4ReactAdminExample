import {DefaultCrudRepository} from '@loopback/repository';
import {Profile, ProfileRelations} from '../models';
import {MongodbConnectionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id,
  ProfileRelations
> {
  constructor(
    @inject('datasources.mongodbConnection') dataSource: MongodbConnectionDataSource,
  ) {
    super(Profile, dataSource);
  }
}
