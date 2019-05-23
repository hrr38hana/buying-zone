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
  background-color: rgb(65, 185, 61);
  background-color: rgb(242, 242, 242);
  color: rgb(255, 255, 255);
  text-align: center;
  width: 1em;
  padding: 0.1em;
  line-height: 1em;
`;

const ReviewsAverage = () => (
  <ReviewsGrid>
    <StarSquare style={{ 'grid-column': '1 / span 1' }}> ⭑ </StarSquare>
    <StarSquare style={{ 'grid-column': '2 / span 1' }}> ⭑ </StarSquare>
    <StarSquare style={{ 'grid-column': '3 / span 1' }}> ⭑ </StarSquare>
    <StarSquare style={{ 'grid-column': '4 / span 1' }}> ⭑ </StarSquare>
    <StarSquare style={{ 'grid-column': '5 / span 1' }}> ⭑ </StarSquare>
  </ReviewsGrid>
);

export default ReviewsAverage;
