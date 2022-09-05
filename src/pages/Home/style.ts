import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 20px auto;

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

  .button-action {
    background: #2CC3D5;
    border-radius: 8px;
    color: #F8FBFB;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
  }

  .button-action:first-of-type {
    margin-right: 5px;
  }

  .button-action:last-of-type {
    margin-right: 10px;
  }

  .button-action:hover {
    background-color: #218F9C;
  }

  .buttons-set-exibition button {
    cursor: pointer;
    background-color: transparent;
  }

  @media(max-width: 1650px) {
    max-width: 1400px;
  }

  @media(max-width: 1450px) {
    max-width: 1200px;
  }

  @media(max-width: 1250px) {
    max-width: 1000px;
  }

  @media(max-width: 1050px) {
    max-width: 800px;
  }

  @media(max-width: 850px) {
    max-width: 600px;

    .inline,
    .actions { 
      flex-direction: column;
      width: 100%;
      padding: 10px;
    }

    h1 {
      margin-bottom: 20px;
    }

    input {
      margin-bottom: 10px;
      margin-right: 0px;
      width: 100%;
    }

    .button-action {
      margin-bottom: 10px;
      width: 100%;
    }

    .button-action:first-of-type {
      margin-right: 0px;
    }

    .button-action:last-of-type {
      margin-right: 0px;
    }
  }

  @media(max-width: 650px) {
    max-width: 400px;
  }
`;

export const Favorities = styled.div`
  border-bottom: 1px solid #B9CBD3;
  padding-bottom: 50px;

  .title-favoritie {
    font-size: 32px;
    font-weight: 700;
    color: #607B99;

    margin-top: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  margin-top: 50px;

  @media(max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;

    margin: 10px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  margin-top: 50px;
`;

export const AddButton = styled.div`
  width: 56px;
  height: 56px;

  background-color: #2CC3D5;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 100px;
  right: 100px;

  z-index: 1;

  cursor: pointer;

  :hover {
    background-color: #218F9C;
  }

  @media(max-width: 1250px) {
    bottom: 20px;
    right: 20px;
  }
`;