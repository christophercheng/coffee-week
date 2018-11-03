import React from "react";
import { Toolbar, SelectLabel, SectionContainer, Filter } from "./Toolbar.styles";

class ToolbarSection extends React.Component {
  onCityChange = ({ target: { value }}) => {
    this.props.selectCity(value);
  };

  onDeptChange = ({ target: { value }})=> {
    this.props.changeDeptSelection(value);
  }

  renderSelectOption = location => (
    <option key={location} value={location}>{location}</option>
  );

  renderCheckbox = dept => {
    const selected = this.props.departmentFilter[dept];
    return (
      <Filter key={dept}>
        <input type="checkbox" value={dept} checked={selected} onChange={this.onDeptChange}/>
        {dept}
      </Filter>
    );
    }

  render = () => (
    <Toolbar>
      <SectionContainer>
        <SelectLabel>FILTER: </SelectLabel>
        <Filter>
          <select onChange={this.onCityChange} value={this.props.selectedCity}>
            {Object.keys(this.props.locationFilter).map(this.renderSelectOption)}
          </select>
        </Filter>
        {Object.keys(this.props.departmentFilter).map(this.renderCheckbox)}
      </SectionContainer>
    </Toolbar>
  );
}

export default ToolbarSection;