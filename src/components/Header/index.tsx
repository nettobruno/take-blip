import { Container } from './style';
import logoTakeBlip from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <img src={logoTakeBlip} alt="Logo Take Blip" />
    </Container>
  );
}