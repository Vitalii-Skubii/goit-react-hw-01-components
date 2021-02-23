import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendsListItem.module.css';

// "avatar": "https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg",
//     "name": "Ajax",
//     "isOnline ": true,
//     "id": 1213

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const status = isOnline ? style.isOnline : style.isOfline;
  return (
    <li key={id} className={style.item}>
      <span className={status}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
};
export default FriendListItem;
