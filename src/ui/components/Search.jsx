import React from 'react';
import styled from 'styled-components';



export const SearchConteiner = styled.div`
width:300px;
height:35px;
display:flex;
border-radius: 20px;
padding:10px 20px;
box-sizing:border-box;
font-size:15px;
line-height:15px;
background:#F6F6F6;
    input{
        width:100%;
        border:0;
        display:block;
        outline:none;
        background:none;
        margin-left:7px;
        &:focus{
            border:0;
           
        }
        &::placeholder{
            opacity:0.5
        }
    }
`