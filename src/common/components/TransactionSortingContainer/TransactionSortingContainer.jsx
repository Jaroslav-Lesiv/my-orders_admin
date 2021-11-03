import React from 'react';
import { SortingContainter } from '../../styles/TransactionList/TransactionList';

function TransactionSortingContainer() {
  return (
    <div>
      <SortingContainter>
        <div>
          <select>
            <option selected hidden>
              Name
            </option>
            <option>A-Z</option>
          </select>
        </div>

        <div>
          <select>
            <option selected hidden>
              Date
            </option>
            <option>Latest</option>
          </select>
        </div>

        <div>
          <select>
            <option selected hidden>
              Transaction Purpose
            </option>
            <option>Incoming</option>
          </select>
        </div>
      </SortingContainter>
    </div>
  );
}

export default TransactionSortingContainer;
