import styled from 'styled-components';

export const TransactionSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const Table = styled.table`
  width: 555px;

  background-color: ${props => props.theme.colors.primaryBgColor};
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
`;

export const Th = styled.th`
  height: 30px;
  color: ${props => props.theme.colors.light};
  background-color: #4cc6f5;

  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  & {
    :first-child {
      border-left: none;
    }
  }
  & {
    :last-child {
      border-right: none;
    }
  }
`;

export const TrData = styled.tr`
  height: 30px;
  text-align: center;
  color: ${props => props.theme.colors.secondaryTextColor};
  font-weight: ${props => props.theme.fontWeights.secondaryText};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.17;
  letter-spacing: 0.03em;
  background-color: ${props => props.theme.colors.primaryBgColor};

  & {
    :nth-child(2n) {
      background-color: ${props => props.theme.colors.secondaryBgColor};
    }
  }
`;

export const Td = styled.td`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  & {
    :first-child {
      border-left: none;
    }
  }
  & {
    :last-child {
      border-right: none;
    }
  }
`;
