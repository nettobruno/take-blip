import styled from 'styled-components';

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