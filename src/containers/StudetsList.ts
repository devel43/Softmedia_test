import { connect } from 'react-redux'
import StudetsList from '../components/StudetsList'

const mapStateToProps = (state: any) => ({
  studentsList: state.users.users
})

export default connect(mapStateToProps)(StudetsList)
