import React from 'react';
import styled from "styled-components";
import {Row} from "../../components/ui/row";
import colors from "../../theme/colors";

export const Container = styled(Row)`
    width: 100%;
    background: ${colors.bg.primary};
    opacity: .8;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    position: fixed;
    z-index: 10;
    top: 0;
`
export const HeaderBlock = styled.div`
  margin-right: auto;
  margin-left: 20px;
`

export const HeaderText = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
`
export const HeaderDescription = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`