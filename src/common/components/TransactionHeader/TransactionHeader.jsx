import React from 'react';
import { TransactionHeaderContainer } from '../../styles/TransactionList/TransactionList';

function TransactionHeader() {
  return (
    <TransactionHeaderContainer>
      <span>Transaction List</span>
      <select>
        <option selected disabled hidden>Monthley</option>
        <option>Year</option>
      </select>
    </TransactionHeaderContainer>
  );
}

export default TransactionHeader;
