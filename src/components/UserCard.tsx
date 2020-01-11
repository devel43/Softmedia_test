
import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { User } from '../interfaces/user';
import Icon from '@material-ui/core/Icon';
import { IRating } from '../interfaces/dictionaries';

const avatarParams = {
  background: "0D8ABC",
  color: "fff"
}

interface Props {
  user: User,
  ratings: Array<IRating>,
  modal_editUser: Function,
  removeUser: Function
}

const UserCard = ({user, ratings, modal_editUser, removeUser}:Props) => {

  const getDateString = (dateString :String) => {
    return new Date(String(dateString)).toLocaleDateString()
  }

  const information = {
    avatarLink: `https://eu.ui-avatars.com/api/?background=${avatarParams.background}&color=${avatarParams.color}&name=${user.firstName}+${user.secondName}`,
    name: `${user.firstName} ${user.secondName} ${user.lastName}`,
    getRatingLabel: () => {
      const userRating = ratings.find(currentValue => currentValue.id === user.rating )
      return userRating && `Rating: ${userRating.name}`
    },
    dateOfBirthday: getDateString(user.dateOfBirthday)
  }

  return (
    <ListItem className="userItem">
      <ListItemAvatar>
        <Avatar>
          <img src={information.avatarLink} alt={information.name}/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${information.name}(${information.dateOfBirthday})`} secondary={information.getRatingLabel()} />
      <Icon className="ico" fontSize="small" onClick={e => modal_editUser(user)} >edit</Icon>
      <Icon className="ico" fontSize="small" onClick={e => removeUser(user.id)}>delete</Icon>
    </ListItem>
  )
}

export default UserCard
