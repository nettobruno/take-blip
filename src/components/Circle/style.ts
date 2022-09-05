import styled from 'styled-components'

interface Props {
  size: number;
  color: string
}

export const Container = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  background-color: ${(props) => props.color};
  border-radius: 100%;
`;