import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 260px;
  height: 330px;
  background-color: ${props => props.theme.colors.primaryBgColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 33px;
`;

export const Name = styled.p`
  margin-top: 27px;
  margin-bottom: 0;

  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: ${props => props.theme.fontWeights.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.01em;
`;
export const TagLocation = styled.p`
  margin-top: 9px;
  margin-bottom: 0;

  color: ${props => props.theme.colors.secondaryTextColor};
  font-weight: ${props => props.theme.fontWeights.secondaryText};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.14;
`;

export const StatisticList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  height: 74px;

  justify-content: center;

  background-color: ${props => props.theme.colors.secondaryBgColor};
`;

export const StatisticItem = styled.li`
  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-basis: calc(100% / 3);

  background-color: ${props => props.theme.colors.secondaryBgColor};
`;

export const SpanLabel = styled.span`
  color: ${props => props.theme.colors.secondaryTextColor};
  font-weight: ${props => props.theme.fontWeights.secondaryText};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.14;
`;

export const SpanQuantity = styled.span`
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: ${props => props.theme.fontWeights.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.01em;
`;
