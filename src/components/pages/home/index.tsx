import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Context from '../../../state/Context';

import { MainStyles, NavStyles } from './styles';
import ImgLogo from '../../../assets/logo.svg';

import Filter from '../../organisms/filter';
import Loading from '../../atoms/loading';
import SurvivorsGrid from '../../organisms/survivorsGrid';
import SurvivorDetails from '../../molecules/survivorDetails';

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
          <div style={{ display: state.loading ? 'block' : 'none' }}>
            <Loading />
          </div>
          {state.error && !state.loading && <span>error!</span>}
          {!state.loading && !state.error && <SurvivorsGrid />}
        </div>
      </MainStyles>
      <SurvivorDetails></SurvivorDetails>
    </>
  );
}
