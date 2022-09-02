import styled from 'styled-components';

interface Props {
  size: number;
}

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: #56616E;
  }

  form {
    display: flex;
    align-items: center;
  }

  input {
    border: 1px solid #D2DFE6;
    border-radius: 8px;
    color: #D2DFE6;
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
    margin-right: 10px;

    ::placeholder {
      color: #D2DFE6;
      font-size: 14px;
      font-weight: 600;
    }
  }

  form button {
    background: #2CC3D5;
    border-radius: 8px;
    color: #F8FBFB;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
  }

  form button:first-of-type {
    margin-right: 5px;
  }

  form button:last-of-type {
    margin-right: 10px;
  }

  form button:hover {
    background-color: #218F9C;
  }

  .buttons-set-exibition button {
    cursor: pointer;
    background-color: transparent;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  margin-top: 50px;

  a {
    background-color: #ffffff;
    box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;

    text-decoration: none;

    transition: all 0.3s;
  }

  a h2 {
    font-size: 16px;
    font-weight: 700;
    color: #52636C;

    margin-top: 20px;
  }

  a h3 {
    font-size: 12px;
    font-weight: 400;
    color: #738192;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  margin-top: 50px;

  a {
    background-color: #ffffff;
    box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
    border-radius: 7px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 50px;

    text-decoration: none;

    transition: all 0.3s;
  }

  a > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a h2 {
    font-size: 16px;
    font-weight: 700;
    color: #52636C;

    margin-left: 10px;
  }

  a h3 {
    font-size: 12px;
    font-weight: 400;
    color: #738192;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: #738192;
  }
`;

export const Circle = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  background-color: #2CC3D5;
  border-radius: 100%;
`;

export const AddButton = styled.div`
  width: 56px;
  height: 56px;

  background-color: #2CC3D5;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 100px;
  right: 100px;

  cursor: pointer;

  :hover {
    background-color: #218F9C;
  }
`;