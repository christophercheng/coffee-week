import ToolbarSection from "./Toolbar.component";
import {connect} from 'react-redux';
import {selectCity, changeDeptSelection} from "../../../../../actions";
import {bindActionCreators} from 'redux';
import { getFirstSelected } from '../../../../../actions/helpers';

const mapStateToProps = state => {
  const {department, location } = state.filter;
  return {
    locationFilter: location,
    selectedCity: getFirstSelected(location),
    departmentFilter: department
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({selectCity, changeDeptSelection}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarSection);