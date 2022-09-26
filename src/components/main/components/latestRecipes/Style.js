import styled from "styled-components";

export const Container = styled.section `
    text-align: center;
    padding: 1.5rem 1rem;
`

export const BoxRecipesTitle = styled.div`
    margin: 2.9rem;
`

export const RecipesTitle = styled.h2 `
    font-size: 2rem;
    letter-spacing: .1rem;
    line-height: 3.1rem;
    margin-bottom: 1rem;
`

export const HorizontalLine = styled.span `
    width: 4.5rem;
    height: .3rem;
    display: inline-block;
    background-color: #373737;
`

export const HorizontalLineCard = styled(HorizontalLine) `
    width: 3.1rem;
    margin: 7.1rem 0 .7rem;
`

export const Card = styled.figure `
    margin-bottom: .9rem;
    padding-bottom: 7rem;
    box-shadow: 0px 7px 6px #00000029;
`
export const RecipeImg = styled.img `
    width: 100%;
`
export const RecipeTitle = styled.figcaption `
    font-size: 2rem;
    line-height: 2.5rem;
`