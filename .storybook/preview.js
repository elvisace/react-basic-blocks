import React from 'react';
import { addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 20px;
    font-family: Avenir;
  }
`;

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));