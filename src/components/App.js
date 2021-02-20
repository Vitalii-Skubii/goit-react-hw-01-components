import React from 'react';
import Profile from "./Profile"
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'
import data from "../data/user.json"
import statistics from '../data/statistical-data.json'
import friends from '../data/friends.json'
import transaction from '../data/transaction.json'


const App=()=> {
  return (
    <>
      <Profile
      name={data.name}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
        stats={data.stats} />
      <Statistics items={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  )
}

export default App;
