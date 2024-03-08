import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutUs extends Schema.Component {
  collectionName: 'components_about_us_about_uses';
  info: {
    displayName: 'about-us';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    measure: Attribute.String;
    quantity: Attribute.BigInteger;
    title: Attribute.String;
  };
}

export interface ProjectDocumentDocument extends Schema.Component {
  collectionName: 'components_project_document_documents';
  info: {
    displayName: 'document';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    href: Attribute.Media;
  };
}

export interface ProjectOrganizerOrganizer extends Schema.Component {
  collectionName: 'components_project_organizer_organizers';
  info: {
    displayName: 'organizer';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Component<'section-image.section-image'>;
  };
}

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

export interface SocialLinkSocialLink extends Schema.Component {
  collectionName: 'components_social_link_social_links';
  info: {
    displayName: 'social-link';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    name: Attribute.Enumeration<['instagram', 'facebook']>;
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
      'about-us.about-us': AboutUsAboutUs;
      'project-document.document': ProjectDocumentDocument;
      'project-organizer.organizer': ProjectOrganizerOrganizer;
      'section-image.section-image': SectionImageSectionImage;
      'social-link.social-link': SocialLinkSocialLink;
      'technology.veteran-technology': TechnologyVeteranTechnology;
      'veteran.help': VeteranHelp;
    }
  }
}
