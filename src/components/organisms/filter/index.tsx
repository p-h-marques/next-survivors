import { FilterStyles } from './styles';
import Select from '../../molecules/survivorsSelect';

export default function Filter() {
  return (
    <FilterStyles>
      <input type="text" placeholder="filter survivor by name" />
      <Select />
    </FilterStyles>
  );
}
