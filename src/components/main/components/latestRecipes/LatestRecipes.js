import React from "react";
import * as S from "./Style";

import RedVelvetCakeImg from "../../../../assets/images/redVelvet.png";
import MargheritaPizzaImg from "../../../../assets/images/pizza.png";
import PeanutSmoothieImg from "../../../../assets/images/peanut.png";

const recipesList = [
  {
    id: 1,
    image: RedVelvetCakeImg,
    title: "Red Velvet Cake",
  },
  {
    id: 2,
    image: MargheritaPizzaImg,
    title: "Margherita Pizza",
  },
  {
    id: 3,
    image: PeanutSmoothieImg,
    title: "Peanut Smoothie",
  },
];

const LatestRecipes = () => {
  return (
    <S.Container>
      <S.BoxRecipesTitle>
        <S.RecipesTitle>LATEST RECIPES</S.RecipesTitle>
        <S.HorizontalLine></S.HorizontalLine>
      </S.BoxRecipesTitle>
      <S.BoxCard>
        {recipesList.map((item) => (
          <S.Card key={item.id}>
            <S.RecipeImg src={item.image} alt={item.title} />
            <S.HorizontalLineCard></S.HorizontalLineCard>
            <S.RecipeTitle>{item.title}</S.RecipeTitle>
          </S.Card>
        ))}
      </S.BoxCard>
    </S.Container>
  );
};

export default LatestRecipes;
