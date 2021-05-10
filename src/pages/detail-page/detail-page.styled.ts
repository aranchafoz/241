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

    .buttons {
      display: inline-flex;
    }

    .btn {
      margin: 0;
      border: 0;
      padding: .6rem 1rem;
      font-size: 16px;
      font-weight: 600;
      color: #2c2c2c;

      &.go-back {
        background: #fbd6a1;
        margin-right: 1rem;

        &:hover {
          background: #d5af71;
        }
      }

      &.play {
        background: #40c1d6;

        &:hover {
          background: #00a4bf;
        }

      }
    }
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