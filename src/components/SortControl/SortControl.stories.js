import SortControl from './SortControl';
import { SORT_OPTIONS } from '../../constants/data.js';

export default {
  component: SortControl
};

export const Default = {
  args: {
    sortOptions: SORT_OPTIONS,
    defaultSort: SORT_OPTIONS[1].value,
    handleChange: (event) => console.log(`sort by: ${event.target.value}`)
  },
  parameters: {
  }
};
