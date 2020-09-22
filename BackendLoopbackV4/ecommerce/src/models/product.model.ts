import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'objectId'}
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  urlimage: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  promotedprice: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @property({
    type: 'string',
    required: true,
  })
  longdescription: string;

  @property({
    type: 'string',
    required: true,
  })
  shortdescription: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'string',
    required: true,
  })
  altimage: string;
  @property({
    type: 'string',
    required: true,
  })
  typeimage: string

  @property({
    type: 'string',
    required: true,
  })
  reference: string



  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
