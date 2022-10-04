import PropTypes from 'prop-types';

import { SpanLabel, SpanPercentage } from './Statistic.styled';

export default function StatisticItem({ label, percentage }) {
  return (
    <>
      <SpanLabel>{label}</SpanLabel>
      <SpanPercentage>{percentage} %</SpanPercentage>
    </>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
