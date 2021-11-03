import styled from 'styled-components';
import {
  INCOMING_BC,
  OUTGOING_BC,
  PAYMENT_HOLD_BC,
  INCOMING_BORDER,
  OUTGOING_BORDER,
  PAYMENT_HOLD_BORDER,
  INCOMING_COLOR,
  OUTGOING_COLOR,
  PAYMENT_HOLD_COLOR,
} from '../../constants/Transaction';

export const TransactionHeaderContainer = styled.div`
width: 100%;
margin-bottom:20px;
    span{
        float:left;
        font-size:15px;
        font-weight:800;
    }
    select{
        display:block;
        margin-left:auto;
        padding: 5px;
        border-radius:20px;
            option{
                 &:focus{
                     color:green;
                 }
            }
        }
    }
`;

export const SortingContainter = styled.div`
  margin-bottom: 30px;
  display: flex;
  width: 80%;

  margin: 30px auto;
  div {
    width: 33%;
    display: flex;

    select {
      opacity: 0.5;
      background-color: transparent;
      border: white 1px solid;
      outline: none;
    }
  }
`;

export const ItemName = styled.div`
  display: flex;

  i {
    color: #e4e5e9;
  }
  img {
    width: 30px;
    height: 30px;
    margin: 0px 10px 0px 0px;
  }
  span {
    font-size: 13px;
    font-weight: 600;
    width: 130px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ItemDate = styled.div`
  display: flex;

  span {
    font-size: 13px;
    font-weight: 600;
    overflow: hidden;
    margin-left: 5px;
  }
`;

export const ItemPurpose = styled.div`
display:flex;


    div{
        display:flex;
        align-items:center;
        justify-content:center;
        min-width: 130px;
        height: 30px;
        background:${(props) =>
          props.status == 'inComing'
            ? INCOMING_BC
            : props.status == 'outGoing'
            ? OUTGOING_BC
            : props.status == 'paymentHold'
            ? PAYMENT_HOLD_BC
            : 'black'};
        border:${(props) =>
          props.status == 'inComing'
            ? INCOMING_BORDER
            : props.status == 'outGoing'
            ? OUTGOING_BORDER
            : props.status == 'paymentHold'
            ? PAYMENT_HOLD_BORDER
            : 'black'};
        color:${(props) =>
          props.status == 'inComing'
            ? INCOMING_COLOR
            : props.status == 'outGoing'
            ? OUTGOING_COLOR
            : props.status == 'paymentHold'
            ? PAYMENT_HOLD_COLOR
            : 'black'};
        font-size:13px;
        line-height:13px;
        font-weight:600;
        border-radius:50px;
        
    }
        
    }

    
`;
