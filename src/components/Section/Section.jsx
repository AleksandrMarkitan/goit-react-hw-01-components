import PropTypes from 'prop-types';

import css from 'components/Section/Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
