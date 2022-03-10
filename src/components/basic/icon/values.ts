import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export enum Icons {
  SEARCH = 'SEARCH',
}

export const IconsValues: Record<Icons, IconDefinition> = {
  SEARCH: faSearch,
};
