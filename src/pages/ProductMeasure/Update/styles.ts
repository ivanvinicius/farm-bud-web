import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 750px;
  height: 600px;
  margin: 50px auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  border-radius: 0.8rem;
  background-color: var(--color-white);
  box-shadow: 0.6rem 0.6rem 0.9rem rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;

    > button {
      width: 60%;
      align-self: center;
    }

    label {
      color: var(--color-text-complement);
      font-size: 15px;
    }
  }
`;

export const InfoRow = styled.section`
  margin: 20px 0;

  display: grid;
  grid-template-columns: 290px 180px 150px;
  column-gap: 18px;
`;

export const CategoryRow = styled.section`
  margin: 20px 0;

  display: grid;
  grid-template-columns: 250px 250px 150px;
  column-gap: 18px;
`;

export const VolumeRow = styled.section`
  margin: 20px 0;

  display: grid;
  grid-template-columns: 190px 170px 150px;
  column-gap: 18px;
`;

export const TrashArea = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;

    border: 0;
    background: transparent;
    color: var(--color-purple);
    transition: all 0.2s;

    svg {
      margin-left: 8px;
    }

    &:hover {
      color: var(--color-orange);
    }
  }
`;
