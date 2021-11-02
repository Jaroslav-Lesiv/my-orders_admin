import React from 'react';
import styled from 'styled-components';





export const AuthWrapper = styled.div`
width: 300px;
border-radius:25px;
background:grey; 
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
text-align: center;
padding:20px;
    input{
        border:none;
        margin: 20px auto;
        display:block;
        text-align:center;
        padding: 10px 14px;
        outline:none;
    }
    button{
        padding:5px 20px;
    }
`