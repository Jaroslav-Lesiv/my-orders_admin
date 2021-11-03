import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 300px;
  height: 35px;
  display: flex;
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 15px;
  background: #f6f6f6;
  input {
    width: 100%;
    border: 0;
    display: block;
    outline: none;
    background: none;
    margin-left: 7px;
    &:focus {
      border: 0;
    }
    &::placeholder {
      opacity: 0.5;
    }
  }
`;
