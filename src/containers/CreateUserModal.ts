
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
    const newUsers = createNewUser(user)
    dispatch(createUser(newUsers))
  },
});


const createNewUser = (user: User) => {
  const users = API_getAllUsers() || [];
  users.push(user);
  return users
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserModal)
