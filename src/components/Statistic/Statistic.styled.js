import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 260px;
  height: 135px;

  background-color: ${props => props.theme.colors.primaryBgColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const StatisticTitle = styled.h2`
  display: block;
  padding: 29px 0px;
  text-align: center;

  margin: 0px auto;

  color: ${props => props.theme.colors.secondaryTextColor};
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const StatisticBox = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  height: 50px;

  justify-content: center;

  background-color: ${props => props.theme.colors.secondaryBgColor};
`;

export const StatisticElem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-basis: calc(100% / 5);
`;

export const SpanPercentage = styled.span`
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeights.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.01em;
`;

export const SpanLabel = styled.span`
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeights.secondaryText};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.14;
`;
