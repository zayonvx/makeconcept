import React from 'react';
import styled from "styled-components";
import {Row} from "../../components/ui/row";
import colors from "../../theme/colors";

export const Container = styled(Row)`
    width: 100%;
    background: rgba(0,0,0,0.8);
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    position: fixed;
    z-index: 999;
    top: 0;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const HeaderBlock = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderText = styled.h1`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 16px;
`
export const HeaderDescription = styled.p`
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
`