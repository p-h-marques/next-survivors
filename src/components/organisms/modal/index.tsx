import Image from 'next/image';
import { ModalStyles } from './styles';

import ImgClose from '../../../assets/close.svg';
import ImgCloseHover from '../../../assets/close_hover.svg';
import { useCallback, useContext, useState } from 'react';
import Context from '../../../state/Context';
import {
  closeSurvivorDetails,
  loadingStatusUpdate,
  requestUpdate,
} from '../../../state/actions';
import { getSurvivors } from '../../../repository/survivors.repository';
import SurvivorDetails from '../../molecules/survivorDetails';

export default function Modal() {
  const { state, dispatch } = useContext(Context);

  const [image, setImage] = useState(ImgClose);

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
    <ModalStyles>
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

        <SurvivorDetails />
      </div>
    </ModalStyles>
  );
}
