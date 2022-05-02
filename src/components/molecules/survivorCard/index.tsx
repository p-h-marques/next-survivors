import Image from 'next/image';
import { ISurvivor } from '../../../models';
import { SurvivorCardStyles } from './styles';

export default function SurvivorCard(props: ISurvivor) {
  return (
    <SurvivorCardStyles {...props}>
      <div className="image">
        <Image src={props.photo} width={64} height={64} />
      </div>
      <div className="infos">
        <h2>{props.name}</h2>
        <p>{props.nationality}</p>
        <p>Age: {props.age}</p>
      </div>

      {props.isInfected && <div className="infected">infected!</div>}
    </SurvivorCardStyles>
  );
}
