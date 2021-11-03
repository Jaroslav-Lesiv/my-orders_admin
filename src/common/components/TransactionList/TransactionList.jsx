import React from 'react';
import { Container, FlexContainer } from '../Container/Container';
import { SortingConteinter } from '../../styles/TransactionList/TransactionList';
import TransactionHeader from '../TransactionHeader/TransactionHeader';
import TransactionItem from '../TransactionItem/TransactionItem';
import TransactionSortingContainer from '../TransactionSortingContainer/TransactionSortingContainer';
function TransactionList() {
  return (
    <Container width="800px" padding="20px">
      <TransactionHeader />
      <TransactionSortingContainer/>
      <TransactionItem
        profileImg={null}
        name="Stas Popov11111111111111111111111"
        date="09 Sep, 2021"
        status="outGoing"
      />
      <TransactionItem
        profileImg={null}
        name="Nikita Moroz"
        date="21 Jan, 2021"
        status="paymentHold"
      />
      <TransactionItem
        profileImg={null}
        name="Richard Kornev"
        date="12 Feb, 2021"
        status="inComing"
      />
      <TransactionItem profileImg={null} name="Vanya Krug" date="02 Mar, 2021" status="outGoing" />
      <TransactionItem
        profileImg={null}
        name="Timur Kaumov"
        date="29 Apr, 2021"
        status="inComing"
      />
    </Container>
  );
}

export default TransactionList;
