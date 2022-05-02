import Image from 'next/image';
import { SurvivorDetailsModal } from './styles';

import ImgClose from '../../../assets/close.svg';
import ImgCloseHover from '../../../assets/close_hover.svg';
import { useState } from 'react';

export default function SurvivorDetails() {
  const [image, setImage] = useState(ImgClose);

  return (
    <SurvivorDetailsModal>
      <div className="modal">
        <div className="modal__header">
          <span>Jim Carrey</span>
          <Image
            src={image}
            onMouseEnter={() => setImage(ImgCloseHover)}
            onMouseLeave={() => setImage(ImgClose)}
            style={{ cursor: 'pointer' }}
            width={16}
            height={16}
          />
        </div>

        <div className="modal__content">
          <div className="modal__image">
            <Image
              src={
                'https://res.cloudinary.com/teste-pedro-marques/image/upload/v1651455341/survivors/dwight_ea1c0s.png'
              }
              width={120}
              height={120}
            />
          </div>

          <div className="modal__infos">
            <div className="modal__info">
              <p>United States</p>
              <p>Age: 32</p>
              <p>Status: Infected</p>
            </div>
            <div className="modal__action">mark as cured</div>
          </div>
        </div>
      </div>
    </SurvivorDetailsModal>
  );
}
