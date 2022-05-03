import Image from 'next/image';
import { SurvivorDetailsModalStyles } from './styles';

import ImgClose from '../../../assets/close.svg';
import ImgCloseHover from '../../../assets/close_hover.svg';
import { useCallback, useContext, useState } from 'react';
import Context from '../../../state/Context';
import {
  closeSurvivorDetails,
  loadingStatusUpdate,
  requestUpdate,
  updateSurvivorDetails,
} from '../../../state/actions';
import {
  editInfectedStatus,
  getSurvivors,
} from '../../../repository/survivors.repository';
import Loading from '../../atoms/loading';

export default function SurvivorDetails() {
  const { state, dispatch } = useContext(Context);

  const [image, setImage] = useState(ImgClose);
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

  const handleModalClose = useCallback(() => {
    dispatch(closeSurvivorDetails());

    async function actions() {
      dispatch(loadingStatusUpdate(true));
      const request = await getSurvivors(state.filters);
      dispatch(requestUpdate(request));
    }

    actions();
  }, [state.filters, dispatch]);

  return (
    <SurvivorDetailsModalStyles>
      <div className="modal">
        <div className="modal__header">
          <span>{state.details.name}</span>
          <Image
            src={image}
            onMouseEnter={() => setImage(ImgCloseHover)}
            onMouseLeave={() => setImage(ImgClose)}
            onClick={handleModalClose}
            style={{ cursor: 'pointer' }}
            width={16}
            height={16}
          />
        </div>

        <div className="modal__content">
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
        </div>
      </div>
    </SurvivorDetailsModalStyles>
  );
}
