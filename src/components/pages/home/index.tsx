import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Context from '../../../state/Context';

import { MainStyles, NavStyles } from './styles';
import ImgLogo from '../../../assets/logo.svg';

import Filter from '../../organisms/filter';

export default function HomePage() {
  const { state } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <NavStyles>
        <Image src={ImgLogo} />
        <strong>Survivors: Zombie Apocalypse</strong>
      </NavStyles>
      <MainStyles>
        <Filter />
        <div className="content">
          {state.loading && <span>loading...</span>}
          {state.error && !state.loading && <span>error!</span>}
          {!state.loading && !state.error && <span>data here!</span>}
        </div>
      </MainStyles>
    </>
  );
}
