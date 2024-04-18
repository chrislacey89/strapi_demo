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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.card': CardsCard;
    }
  }
}
