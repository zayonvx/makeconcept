import React from 'react';
import styled from "styled-components";
import colors from "./colors";
import {StructuredText} from "react-datocms";

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

export const SectionHeader = styled.h2`
  display: block;
  margin: 0 auto;
  width: 300px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${props => props.dark ? colors.text.headerDark : colors.text.headerLight};
  color: ${props => props.dark ? colors.text.headerDark : colors.text.headerLight};
  margin-bottom: 20px;
`

export const TextBlock = styled.p`
  font-size: 14px;
  color: ${props => props.dark ? colors.text.headerDark : colors.text.primary};
`

export const TextWrapper = styled(StructuredText)`
    font-size: 14px;
    color: ${props => props.dark ? colors.text.headerDark : colors.text.primary};
    margin-top: 10px;
`