import { connect } from 'react-redux'
import IndexPage from '../pages';
import { getRatingsDictionary, modal_createUser, getAllUsers } from '../redux/actions';
import { IRating } from '../interfaces/dictionaries'

const mapDispatchToProps = (dispatch: Function) => ({
  getRatingsDictionary: (ratings: Array<IRating>) => dispatch(getRatingsDictionary(ratings)),
  modal_createUser: () => dispatch(modal_createUser()),
  getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(
  null,
  mapDispatchToProps
)(IndexPage);
