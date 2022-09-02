import { Container } from './style';
import logoTakeBlip from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <a href="https://www.take.net/" target='_blank'>
        <img src={logoTakeBlip} alt="Logo Take Blip" />
      </a>
    </Container>
  );
}