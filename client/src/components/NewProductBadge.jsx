import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  border: 1px solid;
  padding: 0.25em 0.5em;
  font-size: 0.8em;
  font-weight: 900;
`;

const NewProductBadge = () => <Badge> NEW </Badge>;

export default NewProductBadge;
