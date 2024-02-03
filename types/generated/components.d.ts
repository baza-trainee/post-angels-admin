import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroImageImage extends Schema.Component {
  collectionName: 'components_hero_image_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    src: Attribute.Media;
    alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-image.image': HeroImageImage;
    }
  }
}
