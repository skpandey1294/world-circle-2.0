import React, { FC } from 'react'
import { Dropdown, DropdownItem } from "@crave/farmblocks-dropdown"
import { continent } from "../../constants"

type DropdownProps = {
    onHandler: (value: any) => void;
}

const DropdownList: FC<DropdownProps> = ({ onHandler }) => (
    <Dropdown
      text="Filter by Region"
      align="left"
      handleSelection={(value: any) => onHandler(value)}
      style={{height: '25px'}}
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
)

export default DropdownList