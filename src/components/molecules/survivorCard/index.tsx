import Image from 'next/image';
import { useEffect, useState } from 'react';
import { INationality, ISurvivor } from '../../../models';
import { getNationalityInfo } from '../../../repository/nationality.repository';
import { SurvivorCardStyles } from './styles';

export default function SurvivorCard(props: ISurvivor) {
  const [nationality, setNationality] = useState<INationality>({});

  useEffect(() => {
    async function fetchNationalityInfo() {
      const req = await getNationalityInfo(props.nationality);
      setNationality(req);
    }

    fetchNationalityInfo();
  }, [props.nationality]);

  return (
    <SurvivorCardStyles {...props}>
      <div className="image">
        <Image src={props.photo} width={64} height={64} />
      </div>
      <div className="infos">
        <h2>{props.name}</h2>
        {nationality.name && nationality.flag && (
          <div className="nationality">
            <Image src={nationality.flag} width={20} height={12} />
            <p>{nationality.name}</p>
          </div>
        )}
        <p>Age: {props.age}</p>
      </div>

      {props.isInfected && <div className="infected">infected!</div>}
    </SurvivorCardStyles>
  );
}
