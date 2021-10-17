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

export const sectionHeader = (props) => styled.h2`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${props.dark ? colors.text.headerDark : colors.text.headerLight};
  color: ${props.dark ? colors.text.headerDark : colors.text.headerLight};
`