import React from 'react';
import { ItemPurpose } from '../../styles/TransactionList/TransactionList';

function TransactionItemPurpose({ status }) {
  return (
    <ItemPurpose status={status}>
      <div>{status}</div>
    </ItemPurpose>
  );
}

export default TransactionItemPurpose;
