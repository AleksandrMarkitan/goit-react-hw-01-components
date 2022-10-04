import PropTypes from 'prop-types';

import { StatisticSection } from 'components/Section/Section.styled';

export const Section = ({ children, title }) => {
  return (
    <StatisticSection>
      {title && <h2>{title}</h2>}
      {children}
    </StatisticSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
