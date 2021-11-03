import React from 'react';
import { FlexContainer } from '../Container/Container';
import TransactionItemDate from '../TransactionItemDate/TransactionItemDate';
import TransactionItemPurpose from '../TransactionItemPurpose/TransactionItemPurpose';
import TransactionItemName from '../TransactionItemName/TransactionItemName';

function TransactionItem({ name, date, status, profileImg }) {
  return (
    <div style={{display:'flex'}}>
      1
      <FlexContainer alignItems="center">
        <div style={{ width: '33%' }}>
          <TransactionItemName profileImg={profileImg} name={name} />
        </div>
        <div style={{ width: '33%' }}>
          <TransactionItemDate date={date} />
        </div>
        <div style={{ width: '33%' }}>
          <TransactionItemPurpose status={status} />
        </div>
      </FlexContainer>
      2
    </div>
  );
}

export default TransactionItem;
