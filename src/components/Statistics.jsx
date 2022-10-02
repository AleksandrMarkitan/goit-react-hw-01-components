// import PropTypes from 'prop-types';

import StatisticList from './StatisticList';

export default function Statistics({ title = 'upload', stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title} </h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <li key={item.id} class="item">
            <StatisticList label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {};
