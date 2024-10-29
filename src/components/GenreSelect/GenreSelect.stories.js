import GenreSelect from './GenreSelect';
import { GENRES } from '../../constants/data.js';

export default {
  component: GenreSelect
};

export const Default = {
  args: {
    genres: GENRES,
    selectedGenres: [],
    onSelect: (genres) => console.log(`select genres: ${genres}`)
  },
  parameters: {
  }
};
