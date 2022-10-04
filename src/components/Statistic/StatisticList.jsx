import PropTypes from 'prop-types';

import StatisticItem from './StatisticItem';
import { StatisticBox, StatisticElem } from './Statistic.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function StatisticList({ stats, title = 'Upload stats' }) {
  return (
    <StatisticBox>
      {stats.map(item => (
        <StatisticElem
          key={item.id}
          style={{
            backgroundColor: `${getRandomHexColor()}`,
          }}
        >
          <StatisticItem label={item.label} percentage={item.percentage} />
        </StatisticElem>
      ))}
    </StatisticBox>
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
