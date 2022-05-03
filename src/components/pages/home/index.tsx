import { useContext } from 'react';
import Image from 'next/image';
import Context from '../../../state/Context';

import { MainStyles, NavStyles } from './styles';
import ImgLogo from '../../../assets/logo.svg';

import Filter from '../../organisms/filter';
import Loading from '../../atoms/loading';
import SurvivorsGrid from '../../organisms/survivorsGrid';
import Modal from '../../organisms/modal';
import Error from '../../atoms/error';

export default function HomePage() {
  const { state } = useContext(Context);

  return (
    <>
      <NavStyles>
        <Image src={ImgLogo} />
        <strong>Survivors: Zombie Apocalypse</strong>
      </NavStyles>
      <MainStyles>
        <Filter />
        <div className="content">
          {state.loading && <Loading />}

          {state.error && !state.loading && <Error />}

          {!state.loading && !state.error && state.data.length === 0 && (
            <Error />
          )}

          {!state.loading && !state.error && state.data.length > 0 && (
            <SurvivorsGrid />
          )}
        </div>
      </MainStyles>
      {state.details && <Modal></Modal>}
    </>
  );
}
