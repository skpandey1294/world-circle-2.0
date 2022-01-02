import React from "react";
import { Dropdown, DropdownItem } from "@crave/farmblocks-dropdown";
import { continent } from "../../constants";

import "./index.css";

function DropdownList({ onHandler }) {
  return (
    <Dropdown
      text="Filter by Region"
      align="left"
      handleSelection={(value) => onHandler(value)}
      style={{ height: "25px" }}
    >
      <DropdownItem value={continent.ALL}>{continent.ALL}</DropdownItem>
      <DropdownItem value={continent.AFRICA}> {continent.AFRICA} </DropdownItem>
      <DropdownItem value={continent.AMERICAS}>
        {continent.AMERICAS}
      </DropdownItem>
      <DropdownItem value={continent.ASIA}> {continent.ASIA} </DropdownItem>
      <DropdownItem value={continent.EUROPE}> {continent.EUROPE} </DropdownItem>
      <DropdownItem value={continent.OCEANIA}>{continent.OCEANIA}</DropdownItem>
    </Dropdown>
  );
}

export default DropdownList;
