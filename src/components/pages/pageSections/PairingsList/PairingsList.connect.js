import PairingsList from "./PairingsList.component";
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    users: state.users,
    pairings: state.pairings
  }
}

export default connect(mapStateToProps)(PairingsList);