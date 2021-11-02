import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SIDEBAR_WIDTH} from '../../constants/variablse'


export const NavConteiner = styled.div`
width:${SIDEBAR_WIDTH};
height:100%;
background:#F6F4F5;
position:fixed;
padding: 70px 25px;
box-sizing:border-box;
`

export const NavItemConteiner = styled(NavLink)`
display:flex;
border:none;
color:black;
outline:none;
text-decoration:none;
display:flex;
align-items:center;
padding:10px 0px;
    div{
        font-size:20px;
    }
    span{
        opacity:0.5;
        margin-left:20px;
    }
`