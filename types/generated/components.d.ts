import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    date: Attribute.DateTime;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
    icon: 'brush';
  };
  attributes: {
    shortText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.card': CardsCard;
      'text.text': TextText;
    }
  }
}
