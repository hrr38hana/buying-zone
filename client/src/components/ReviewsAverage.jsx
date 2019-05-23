import React from 'react';
import styled from 'styled-components';

const ReviewsGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1em);
  grid-column-gap: 0.4em;
  margin: 0.5em auto;
  cursor: default;
`;
const StarSquare = styled.div`
  background:
    linear-gradient(
      to right,
      rgb(65,185,61) ${props => `${props.fill * 100}%`},
      rgb(242,242,242) ${props => `${props.fill * 100}%`}
    );
  color: rgb(255, 255, 255);
  text-align: center;
  width: 1em;
  padding: 0.1em;
  border-radius: 0.1em;
  line-height: 1em;
`;

const ReviewsAverage = () => {
  const squares = [1, 1, 1, 0.4, 0];
  return (
    <ReviewsGrid>
      {squares.map((fill, i) => (
        <StarSquare
          style={{ gridColumn: `${i + 1} / span 1` }}
          fill={fill}
          key="squares"
        >
          ⭑
        </StarSquare>
      ))}
    </ReviewsGrid>
  );
};

export default ReviewsAverage;
