import { Container } from './style';
import logoTakeBlip from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <a href="https://www.take.net/" target='_blank' rel="noopener noreferrer">
        <img src={logoTakeBlip} alt="Logo Take Blip" />
      </a>
    </Container>
  );
}