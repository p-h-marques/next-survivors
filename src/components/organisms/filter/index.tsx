import { FilterStyles } from './styles';
import Select from '../../molecules/survivorsSelect';
import Input from '../../molecules/survivorsInput';

export default function Filter() {
  return (
    <FilterStyles>
      <Input />
      <Select />
    </FilterStyles>
  );
}
