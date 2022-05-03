import { SurvivorDetailsStyles } from './styles';
import Image from 'next/image';
import { useCallback, useContext, useState } from 'react';
import Context from '../../../state/Context';
import { editInfectedStatus } from '../../../repository/survivors.repository';
import { updateSurvivorDetails } from '../../../state/actions';
import Loading from '../../atoms/loading';

export default function SurvivorDetails() {
  const { state, dispatch } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const handleInfectedChange = useCallback(async () => {
    setLoading(true);

    const request = await editInfectedStatus(
      state.details.id,
      !state.details.isInfected,
    );

    if (request !== false) {
      dispatch(updateSurvivorDetails(request.isInfected));

      setLoading(false);
    }
  }, [state.details.id, state.details.isInfected, dispatch]);

  return (
    <SurvivorDetailsStyles>
      <div className="modal__image">
        <Image src={state.details.photo} width={120} height={120} />
      </div>

      <div className="modal__infos">
        <div className="modal__info">
          <div className="modal__nationality">
            <Image src={state.details.flag} width={24} height={14} />
            <p>{state.details.country}</p>
          </div>
          <p>Age: {state.details.age}</p>
          <p>Status: {state.details.isInfected ? 'Infected' : 'Cured'}</p>
        </div>
        <div className="modal__actions">
          <div
            onClick={handleInfectedChange}
            className={`modal__action${
              state.details.isInfected ? '' : ' modal__action--cured'
            }`}
          >
            mark as {state.details.isInfected ? 'cured' : 'infected'}
          </div>
          {loading && <Loading width={24} />}
        </div>
      </div>
    </SurvivorDetailsStyles>
  );
}
