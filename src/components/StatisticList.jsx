// import PropTypes from 'prop-types';

export default function StatisticList({ label, percentage }) {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage} %</span>
    </div>
  );
}

// Statistics.propTypes = {};
