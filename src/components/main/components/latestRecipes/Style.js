import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  padding: 1.5rem 1rem;
  margin-bottom: 8rem;
`;

export const BoxRecipesTitle = styled.div`
  margin: 2.9rem;

  @media (min-width: 1024px) {
    margin: 10rem 0 0;
  }
`;

export const RecipesTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3.1rem;
  font-family: "HURME GEOMETRIC S.B.";
  white-space: nowrap;
`;

export const HorizontalLine = styled.span`
  width: 4.5rem;
  height: 0.3rem;
  display: inline-block;
  background-color: #373737;
`;

export const BoxCard = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-directon: column;
    justify-content: center;
  }
`;

export const HorizontalLineCard = styled(HorizontalLine)`
  width: 3.1rem;
  margin: 7.1rem 0 0.7rem;
`;

export const Card = styled.figure`
  margin-bottom: 0.9rem;
  padding-bottom: 7rem;
  box-shadow: 0px 7px 6px #00000029;

  @media (min-width: 1024px) {
    margin: 3.6rem;
  }
`;
export const RecipeImg = styled.img`
  width: 100%;
`;
export const RecipeTitle = styled.figcaption`
  font-size: 2rem;
  line-height: 2.5rem;
`;
