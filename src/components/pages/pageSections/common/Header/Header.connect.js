import HeaderSection from "./Header.component";
import {connect} from 'react-redux';
import { getFirstSelected } from '../../../../../actions/helpers';


const mapStateToProps = state => {
  return {
    selectedCity: getFirstSelected(state.filter.location)
  }
}

export default connect(mapStateToProps)(HeaderSection);