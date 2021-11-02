import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const ControlIconConteiner = styled.div`
display:flex;
margin-left:auto;

`


export const ControlIcon = styled(NavLink)`
width:35px;
height:35px;
background:#F6F6F6;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
margin-left:20px;
text-decoration:none;
outline:none;
color:black;
`