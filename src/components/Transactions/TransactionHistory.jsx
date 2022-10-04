import PropTypes from 'prop-types';

import TransactionItem from './TransactionItem';

import { Table, Thead, TrData } from './Transaction.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

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
