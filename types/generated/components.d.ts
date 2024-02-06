import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionImageSectionImage extends Schema.Component {
  collectionName: 'components_section_image_section_images';
  info: {
    displayName: 'section-image';
    description: '';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Media;
  };
}

export interface TechnologyVeteranTechnology extends Schema.Component {
  collectionName: 'components_technology_veteran_technologies';
  info: {
    displayName: 'veteran-technology';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Component<'section-image.section-image'>;
  };
}

export interface VeteranHelp extends Schema.Component {
  collectionName: 'components_veteran_help_helps';
  info: {
    displayName: 'veteran-help';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section-image.section-image': SectionImageSectionImage;
      'technology.veteran-technology': TechnologyVeteranTechnology;
      'veteran.help': VeteranHelp;
    }
  }
}
