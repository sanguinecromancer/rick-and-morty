import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .characters {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .characters {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  .pagination-bar {
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
  }
`;
export default Wrapper;
