import styled from "styled-components";

export const DetailPageContainer = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "data image";
  grid-template-columns: 50% 50%;
  grid-template-rows: 80px calc(100vh - 186px - 80px);
  max-height: calc(100vh - 186px);
  overflow: hidden;
  
  h1 {
    grid-area: title;
    padding: 0 2rem;
    color: #00a4bf;
  }

  .section-left {
    grid-area: data;
    padding: 0 2rem;
    color: #bdbdbd;
  }
  .section-right {
    grid-area: image;
    display: flex;

    img {
      padding: 0 2rem 2rem;
      width: calc(100% - 4rem);
      max-width: 100%;
      min-height: calc(100% - 2rem);
      max-height: 100%;
      object-fit: contain;
    }
  }
`;