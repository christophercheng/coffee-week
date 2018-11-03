import React from "react";
import { SectionContainer, BarSection as Header } from "../pageSection.styles";

const HeaderSection = ({title, selectedCity}) => {
  return (
    <Header>
      <SectionContainer>{`${title} (${selectedCity})`}</SectionContainer>
    </Header>
  );
}

export default HeaderSection;
