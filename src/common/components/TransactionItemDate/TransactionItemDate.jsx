import React from 'react';
import { ItemDate } from '../../styles/TransactionList/TransactionList';

function TransactionItemDate({ date }) {
  return (
    <ItemDate>
              <i style={{color:'blue'}} className="icon-calendar"></i>
      <span>
        {date}
      </span>
    </ItemDate>
  );
}

export default TransactionItemDate;
