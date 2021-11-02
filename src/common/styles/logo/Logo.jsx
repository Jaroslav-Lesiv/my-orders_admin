import styled from 'styled-components'
import { SIDEBAR_WIDTH } from '../../constants/variablse'


export const Logo = styled.div`
width:${SIDEBAR_WIDTH};
height:100%;
position:absolute;
background:#F6F4F5;
top:0;
left:0;
display:flex;
align-items: flex-end;
    span{
        font-size:20px;
        font-weight: 800;
        margin:0px 0px 10px 25px;
    }
`