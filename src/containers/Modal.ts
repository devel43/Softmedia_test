
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { hideModal } from '../redux/actions';

const mapStateToProps = (state: any) => ({
  isShow: state.modal.isShow,
  modalType: state.modal.modalType,
})

const mapDispatchToProps = (dispatch: Function) => ({
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
