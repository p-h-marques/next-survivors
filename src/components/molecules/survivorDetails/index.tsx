import Image from 'next/image';
import { SurvivorDetailsModalStyles } from './styles';

import ImgClose from '../../../assets/close.svg';
import ImgCloseHover from '../../../assets/close_hover.svg';
import { useContext, useState } from 'react';
import Context from '../../../state/Context';
import { closeSurvivorDetails } from '../../../state/actions';

export default function SurvivorDetails() {
  const { state, dispatch } = useContext(Context);

  const [image, setImage] = useState(ImgClose);

  return (
    <SurvivorDetailsModalStyles>
      <div className="modal">
        <div className="modal__header">
          <span>{state.details.name}</span>
          <Image
            src={image}
            onMouseEnter={() => setImage(ImgCloseHover)}
            onMouseLeave={() => setImage(ImgClose)}
            onClick={() => dispatch(closeSurvivorDetails())}
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
            <div
              className={`modal__action${
                state.details.isInfected ? '' : ' modal__action--cured'
              }`}
            >
              mark as {state.details.isInfected ? 'cured' : 'infected'}
            </div>
          </div>
        </div>
      </div>
    </SurvivorDetailsModalStyles>
  );
}
