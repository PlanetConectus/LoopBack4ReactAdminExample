import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Profile} from '../models';
import {ProfileRepository} from '../repositories';

export class ProfileController {
  constructor(
    @repository(ProfileRepository)
    public profileRepository : ProfileRepository,
  ) {}

  @post('/profiles', {
    responses: {
      '200': {
        description: 'Profile model instance',
        content: {'application/json': {schema: getModelSchemaRef(Profile)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profile, {
            title: 'NewProfile',
            exclude: ['id'],
          }),
        },
      },
    })
    profile: Omit<Profile, 'id'>,
  ): Promise<Profile> {
    return this.profileRepository.create(profile);
  }

  @get('/profiles/count', {
    responses: {
      '200': {
        description: 'Profile model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Profile) where?: Where<Profile>,
  ): Promise<Count> {
    return this.profileRepository.count(where);
  }

  @get('/profiles', {
    responses: {
      '200': {
        description: 'Array of Profile model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Profile, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Profile) filter?: Filter<Profile>,
  ): Promise<Profile[]> {
    return this.profileRepository.find(filter);
  }

  @patch('/profiles', {
    responses: {
      '200': {
        description: 'Profile PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profile, {partial: true}),
        },
      },
    })
    profile: Profile,
    @param.where(Profile) where?: Where<Profile>,
  ): Promise<Count> {
    return this.profileRepository.updateAll(profile, where);
  }

  @get('/profiles/{id}', {
    responses: {
      '200': {
        description: 'Profile model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Profile, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Profile, {exclude: 'where'}) filter?: FilterExcludingWhere<Profile>
  ): Promise<Profile> {
    return this.profileRepository.findById(id, filter);
  }

  @patch('/profiles/{id}', {
    responses: {
      '204': {
        description: 'Profile PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profile, {partial: true}),
        },
      },
    })
    profile: Profile,
  ): Promise<void> {
    await this.profileRepository.updateById(id, profile);
  }

  @put('/profiles/{id}', {
    responses: {
      '204': {
        description: 'Profile PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() profile: Profile,
  ): Promise<void> {
    await this.profileRepository.replaceById(id, profile);
  }

  @del('/profiles/{id}', {
    responses: {
      '204': {
        description: 'Profile DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.profileRepository.deleteById(id);
  }
}
