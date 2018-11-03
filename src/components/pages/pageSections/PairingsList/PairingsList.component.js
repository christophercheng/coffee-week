import React from "react";
import PairingBlock from "../PairingBlock";
import { MainSection, SectionContainer } from "./PairingsList.styles";

class PairingsList extends React.Component {

  renderPair = pair => {
    const { users } = this.props;
    const giverInfo = users[pair[0]];
    const receiverInfo = users[pair[1]];
    return <PairingBlock key={giverInfo.phone} giverInfo={giverInfo} receiverInfo={receiverInfo} />
  }

  render() {
    const { pairings } = this.props;
    return (
      <MainSection>
        {
          !pairings 
          ? <SectionContainer>Loading Pairings</SectionContainer>
          : <SectionContainer>{Object.entries(pairings).map(this.renderPair)}</SectionContainer>
        }
      </MainSection>
    );
  }
};

export default PairingsList;