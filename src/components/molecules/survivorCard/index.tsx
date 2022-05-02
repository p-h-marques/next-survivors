import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';
import { INationality, ISurvivor, ISurvivorDetails } from '../../../models';
import { getNationalityInfo } from '../../../repository/nationality.repository';
import { openSurvivorDetails } from '../../../state/actions';
import Context from '../../../state/Context';
import { SurvivorCardStyles } from './styles';

export default function SurvivorCard(props: ISurvivor) {
  const { dispatch } = useContext(Context);

  const [nationality, setNationality] = useState<INationality>({});

  useEffect(() => {
    async function fetchNationalityInfo() {
      const req = await getNationalityInfo(props.nationality);
      setNationality(req);
    }

    fetchNationalityInfo();
  }, [props.nationality]);

  const handleSurvivorDetails = useCallback(() => {
    const survivorDetails: ISurvivorDetails = {
      name: props.name,
      age: props.age,
      isInfected: props.isInfected,
      photo: props.photo,
      country: nationality.name,
      flag: nationality.flag,
    };

    dispatch(openSurvivorDetails(survivorDetails));
  }, [props, nationality, dispatch]);

  return (
    <SurvivorCardStyles {...props} onClick={handleSurvivorDetails}>
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
