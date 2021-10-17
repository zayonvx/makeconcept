import React from 'react';
import styled from "styled-components";
import colors from "./colors";

export const textLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  color: ${colors.text.primary};
  &:hover {
    color: ${colors.text.accent};
  }
`

export const hiddenHeader = styled.h1`
  display: none;
`