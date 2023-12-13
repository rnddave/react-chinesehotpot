import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  color: rgb(217, 28, 28);
  @media (max-width: 495px) {
    flex-direction: column;
    width: 90%;
    margin: 5px auto;
  }
`;

/* .authentication-container {
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;
  } */