import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewsGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1em) 2% 80%;
  grid-column-gap: 0.4em;
  margin: 0.5em auto;
  cursor: default;
`;
const StarSquare = styled.div`
  width: 1em;
  border-radius: 0.1em;
  padding: 0.1em;
  background:
    linear-gradient(
      to right,
      rgb(65,185,61) ${props => `${props.fill * 100}%`},
      rgb(242,242,242) ${props => `${props.fill * 100}%`}
    );
  text-align: center;
  line-height: 1em;
  color: rgb(255, 255, 255);
`;

function* generateKey() {
  let key = 0;
  while (true) {
    yield key += 1;
  }
}

const key = generateKey();

const ReviewsAverage = ({ reviews }) => {
  let average = reviews.length
    ? (reviews.reduce((acc, rev) => acc + rev) / reviews.length).toFixed(1) : 0;

  const fills = [0, 0, 0, 0, 0].map(() => {
    let fill = 0;
    if (average >= 1) {
      average -= 1;
      fill = 1;
    } else if (average > 0) {
      fill = average;
      average = 0;
    }

    return fill;
  });

  return (
    <ReviewsGrid>
      {fills.map((fill, i) => (
        <StarSquare
          style={{ gridColumn: `${i + 1} / span 1` }}
          fill={fill}
          key={key.next().value}
        >
          ⭑
        </StarSquare>
      ))}
      <span />
      <span style={{ fontSize: '13px' }}>
        {`${reviews.length ? reviews.length : 'No'} reviews / Write a review`}
      </span>
    </ReviewsGrid>
  );
};

ReviewsAverage.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ReviewsAverage;
