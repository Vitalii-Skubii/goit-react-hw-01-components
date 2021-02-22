import React from 'react';
import FriendListItem from './FriendsListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={style.friendList}>{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
