import ImgLoading from '../../../assets/loader.svg';
import Image from 'next/image';
import { LoadingStyles } from './styles';

export default function Loading() {
  return (
    <LoadingStyles>
      <Image src={ImgLoading} width={32} />
    </LoadingStyles>
  );
}
