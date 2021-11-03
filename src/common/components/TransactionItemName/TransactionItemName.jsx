import React from 'react';
import { ItemName } from '../../styles/TransactionList/TransactionList';
import DefaultUser from '../../../assets/images/DefaultUser.png';
function TransactionItemName({ name,profileImg }) {
  return (
    <ItemName>

      <div style={{ display: 'flex', alignItems: 'center' }}>

        <img src={profileImg == null || undefined? DefaultUser : profileImg }></img> 
        <span>{name}</span>
      </div>
    </ItemName>
  );
}

export default TransactionItemName;
