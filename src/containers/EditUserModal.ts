
import { connect } from 'react-redux'
import { ChangeUserModal } from '../components/Modals/ChangeUserModal'
import { hideModal, createUser } from '../redux/actions';
import { User } from '../interfaces/user';
import { API_getAllUsers } from '../api/users';

const mapStateToProps = (state: any) => ({
  ratings: state.dictionaries.ratings,
  activeUser: state.modal.activeUser
})

const mapDispatchToProps = (dispatch: Function) => ({
  hideModal: () => dispatch(hideModal()),
  editUser: (user: User) => {
    const newUsers = editUser(user)
    dispatch(createUser(newUsers))
  },
});


const editUser = (user: User) => {
  const users = API_getAllUsers() || [];

  const editedUsers = users.map((element :User) => {
    if(element.id === user.id) {
      return user
    } else {
      return element
    }
  })
  return editedUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserModal)
