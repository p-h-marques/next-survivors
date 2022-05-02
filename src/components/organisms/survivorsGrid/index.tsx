import { useContext } from 'react';
import { SurvivorsStyles } from './styles';

import { ISurvivor } from '../../../models';
import Context from '../../../state/Context';
import SurvivorCard from '../../molecules/survivorCard';

export default function SurvivorsGrid() {
  const { state } = useContext(Context);

  return (
    <SurvivorsStyles>
      {state.data.map((survivor: ISurvivor) => (
        <SurvivorCard key={survivor._id} {...survivor} />
      ))}
    </SurvivorsStyles>
  );
}
