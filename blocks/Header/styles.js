import React from 'react';
import styled from "styled-components";
import {Row} from "../../components/ui/row";
import colors from "../../theme/colors";

const Container = styled(Row)`
    width: 100%;
    background: ${colors.bg.primary};
    opacity: .8;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    position: fixed;
    z-index: 10;
    top: 0;
`

export default Container;