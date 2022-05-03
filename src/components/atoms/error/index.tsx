import Image from 'next/image';
import ImgError from '../../../assets/error.svg';
import { ErrorStyles } from './styles';

export default function Error() {
  return (
    <ErrorStyles>
      <Image src={ImgError} width={32} height={32} />
      <p>survivors not found!</p>
    </ErrorStyles>
  );
}
