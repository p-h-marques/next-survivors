import ImgLoading from '../../../assets/loader.svg';
import Image from 'next/image';
import { LoadingStyles } from './styles';

interface Props {
  width?: number;
}

export default function Loading({ width = 32 }: Props) {
  return (
    <LoadingStyles>
      <Image src={ImgLoading} width={width} />
    </LoadingStyles>
  );
}
