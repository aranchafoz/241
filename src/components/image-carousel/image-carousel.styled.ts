import styled from "styled-components";

export const ImageCarouselContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  grid-template-columns: unset;
  grid-template-rows: unset;
  overflow: scroll;
  grid-gap: 1rem;
  padding: 0 1rem;

  img {
    width:100%;
    max-width:100%;
    min-height: 300px;
    max-height: 300px;
    object-fit: cover;
  }

  .title {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;