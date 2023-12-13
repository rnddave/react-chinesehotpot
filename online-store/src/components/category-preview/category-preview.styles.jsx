import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled(Link)`
font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`;

export const CategoryPreviewPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media (max-width: 495px) {
    flex-direction: column;
    grid-template-columns: none;
  }
`;

/* .category-preview-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
} */