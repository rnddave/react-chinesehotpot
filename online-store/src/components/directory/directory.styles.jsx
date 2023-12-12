import styled from "styled-components";

export const DirectoryContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 495px) {
  flex-direction: column;
}
`;

/* .categories-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */