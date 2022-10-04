import PropTypes from 'prop-types';

import TransactionItem from './TransactionItem';

import { Table, TrData, Th } from './Transaction.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TrData key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </TrData>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
