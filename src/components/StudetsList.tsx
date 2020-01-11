import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { User } from '../interfaces/user';
import UserCard from '../containers/UserCard';

interface Props {
  studentsList: Array<User>,
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
  },
}));

const StudetsList = ({ studentsList }: Props) => {

  const classes = useStyles();

  const renderUsers = (studentsList: Array<User>) => studentsList.map(user => <UserCard user={user} key={String(user.id)} />)

  return (
    <List className={classes.root}>
      {renderUsers(studentsList)}
    </List>
  )
}

export default StudetsList
