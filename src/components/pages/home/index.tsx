import Image from 'next/image';
import ImgLogo from '../../../assets/logo.svg';
import { NavStyles } from './styles';

export default function HomePage() {
  return (
    <>
      <NavStyles>
        <Image src={ImgLogo} />
        <strong>Survivors: Zombie Apocalypse</strong>
      </NavStyles>
      <main>teste2</main>
    </>
  );
}
