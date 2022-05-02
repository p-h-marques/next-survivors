import { useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Context from '../../../state/Context';
import { filterSelectUpdate } from '../../../state/actions';
import { EnumFilters } from '../../../models';

import { FilterStyles, MainStyles, NavStyles } from './styles';
import ImgLogo from '../../../assets/logo.svg';
import ImgDropdown from '../../../assets/dropdown.svg';

const filters: EnumFilters[] = [
  EnumFilters.ALL,
  EnumFilters.INFECTED,
  EnumFilters.CURED,
];

export default function HomePage() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleSelectChange = useCallback(
    (e: EnumFilters) => {
      dispatch(filterSelectUpdate(e));
    },
    [dispatch],
  );

  return (
    <>
      <NavStyles>
        <Image src={ImgLogo} />
        <strong>Survivors: Zombie Apocalypse</strong>
      </NavStyles>
      <MainStyles>
        <FilterStyles>
          <input type="text" placeholder="filter survivor by name" />
          <div
            className="selector"
            onClick={() => setDropdownVisibility(!isDropdownVisible)}
          >
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
          </div>
        </FilterStyles>
      </MainStyles>
    </>
  );
}
