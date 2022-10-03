import PropTypes from 'prop-types';

import StatisticItem from './StatisticItem';

export default function StatisticList({ stats }) {
  return (
    <ul class="stat-list">
      {stats.map(item => (
        <li key={item.id} class="item">
          <StatisticItem label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
