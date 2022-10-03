import PropTypes from 'prop-types';

export default function StatisticItem({ label, percentage }) {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage} %</span>
    </>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
