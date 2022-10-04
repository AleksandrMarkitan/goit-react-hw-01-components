import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import styled from 'styled-components';

import { Section } from './Section/Section';
import Profile from './Profile/Profile';
import StatisticList from './Statistic/StatisticList';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

import {
  StatisticTitle,
  StatisticSection,
} from '../components/Statistic/Statistic.styled';

import { TransactionSection } from './Transactions/Transaction.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.dark};
  background-color: #727171;
`;

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <StatisticSection>
        {data.title ? (
          <StatisticTitle>{data.title}</StatisticTitle>
        ) : (
          <StatisticTitle>Upload stats</StatisticTitle>
        )}
        <StatisticList stats={data} title={data.title} />
      </StatisticSection>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <TransactionSection>
        <TransactionHistory items={transactions} />
      </TransactionSection>
    </Container>
  );
};
