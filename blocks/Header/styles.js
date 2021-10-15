import React from 'react';
import styled from "styled-components";
import {Row} from "../../components/ui/row";
import colors from "../../theme/colors";

const Container = styled(Row)`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: ${colors.bg.primary};
`

export default Container;