import { useState } from 'react';
import Image from 'next/image';
import ImgLogo from '../../../assets/logo.svg';
import ImgDropdown from '../../../assets/dropdown.svg';
import { FilterStyles, MainStyles, NavStyles } from './styles';

enum EnumFilters {
  ALL = 'all survivors',
  INFECTED = 'infected survivors',
  CURED = 'cured survivors',
}

export default function HomePage() {
  const [filter, setFilter] = useState(EnumFilters.ALL);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

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
            <span>{filter}</span>
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
              <div
                className="dropdown__option"
                onClick={() => {
                  setFilter(EnumFilters.ALL);
                }}
              >
                {EnumFilters.ALL}
              </div>
              <div
                className="dropdown__option"
                onClick={() => {
                  setFilter(EnumFilters.INFECTED);
                }}
              >
                {EnumFilters.INFECTED}
              </div>
              <div
                className="dropdown__option"
                onClick={() => {
                  setFilter(EnumFilters.CURED);
                }}
              >
                {EnumFilters.CURED}
              </div>
            </div>
          </div>
        </FilterStyles>
      </MainStyles>
    </>
  );
}
