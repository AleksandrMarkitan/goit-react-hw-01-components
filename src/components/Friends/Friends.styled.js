import styled from 'styled-components';

export const FriendSection = styled.section`
  width: 260px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const FriendBox = styled.ul`
  width: 260px;

  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FriendElem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;

  background-color: ${props => props.theme.colors.primaryBgColor};
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;

export const SpanStatus = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 14px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#56ab56' : '#e54c65')};
`;

export const NameTitle = styled.p`
  margin-left: 8px;

  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: ${props => props.theme.fontWeights.primaryText};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.01em;
`;
