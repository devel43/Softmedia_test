import UserCard from "../components/UserCard";
import { connect } from 'react-redux'
import { modal_editUser, removeUser } from "../redux/actions";
import { User } from "../interfaces/user";

const mapStateToProps = (state: any) => ({
  ratings: state.dictionaries.ratings,
})

const mapDispatchToProps = (dispatch: Function) => ({
  modal_editUser: (user :User) => dispatch(modal_editUser(user)),
  removeUser: (userId: string) => dispatch(removeUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
