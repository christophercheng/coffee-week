import React from 'react';
import HeaderSection from "../pageSections/common/Header";
import ToolbarSection from "../pageSections/common/Toolbar";
import Pairingslist from "../pageSections/PairingsList";

const HomePage = (props) => {
  return (
    <div>
      <HeaderSection title="COFFEE WEEK"/>
      <ToolbarSection />
      <Pairingslist />
    </div>
  );
}

export default HomePage;
