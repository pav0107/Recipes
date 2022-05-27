import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };
  return (
    <Wrapper>
      <h3>Popular picks</h3>
      {popular.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </Card>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`;

export default Popular;
