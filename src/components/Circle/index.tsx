import { Container } from './style'

interface CircleProps {
  size: number;
}

export default function Circle({ size }: CircleProps) {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <Container size={size} color={getRandomColor()} />    
  );
}