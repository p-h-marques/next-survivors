import { useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { SelectStyles } from './styles';
import ImgDropdown from '../../../assets/dropdown.svg';

import Context from '../../../state/Context';
import { filterSelectUpdate } from '../../../state/actions';
import { EnumFilters } from '../../../models';
import { getSurvivors } from '../../../repository/survivors.repository';

const filters: EnumFilters[] = [
  EnumFilters.ALL,
  EnumFilters.INFECTED,
  EnumFilters.CURED,
];

export default function Select() {
  const { state, dispatch } = useContext(Context);

  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const startRequest = useCallback(() => {
    getSurvivors(state.filters);
  }, [state.filters]);

  const handleSelectChange = useCallback(
    (e: EnumFilters) => {
      dispatch(filterSelectUpdate(e));
    },
    [dispatch],
  );

  useEffect(() => {
    startRequest();
  }, [state.filters.select, startRequest]);

  return (
    <SelectStyles onClick={() => setDropdownVisibility(!isDropdownVisible)}>
      <span>{state.filters.select}</span>
      <Image
        src={ImgDropdown}
        style={{
          transform: isDropdownVisible ? 'rotate(180deg)' : 'unset',
        }}
      />
      <div
        className="dropdown"
        style={{
          display: isDropdownVisible ? 'block' : 'none',
        }}
      >
        {filters.map((filter) => (
          <div
            key={filter}
            className="dropdown__option"
            onClick={() => {
              handleSelectChange(filter);
            }}
          >
            {filter}
          </div>
        ))}
      </div>
    </SelectStyles>
  );
}
