import React from "react";
import { Block, Divider, Name } from "./PairingBlock.styles";

const PairingBlock = ({giverInfo, receiverInfo}) => {
  const getName = ({first, last}) => (
    <div>{first} {last}</div>  
  );

  return (
    <Block>
      <div>
        GIVER: <Name>{getName(giverInfo.name)}</Name>
      </div>
      <Divider />
      <div>
        RECEIVER: <Name>{getName(receiverInfo.name)}</Name>
      </div>
    </Block>
  );
}

export default PairingBlock;