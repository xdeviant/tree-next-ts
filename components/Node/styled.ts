import styled from 'styled-components';
import { AiFillFolder } from 'react-icons/ai';
import { IoDocument } from 'react-icons/io5';

interface InnerProps {
    lvl: number,
}

export const Inner = styled.div<InnerProps>`
    display: flex;
    margin-top: 10px;
    padding-left: ${(props) => `${props.lvl * 40}px`};
`;

export const SVGFolder = styled(AiFillFolder)`
    fill: #78909C;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
`;

export const SVGDocument = styled(IoDocument)`
    fill: #F3AA18;
    width: 17px;
    height: 17px;
    margin-right: 5px;
`;