import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, Input, DropdownItem } from 'reactstrap'

const SearchDropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])

  const toggle = () => setDropdownOpen(prevState => !prevState)

  useEffect(() => {
    setFilteredItems(props.items)
  }, [props.items])

  const handleOnChange = (event) => {
    const filteredItemsList = props.items.filter(item => item.name.includes(event.target.value))
    setFilteredItems(filteredItemsList)
  }

  const handleClick = (item, index) => {
    toggle()
    props.onClick(item, index)
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        disabled={props.disabled}
      >
        <Input placeholder={props.placeholder} onChange={handleOnChange}/>
      </DropdownToggle>
      <DropdownMenu modifiers={{
        setMaxHeight: {
          enabled: true,
          order: 890,
          fn: (data) => {
            return {
              ...data,
              styles: {
                ...data.styles,
                overflow: 'auto',
                maxHeight: '250px',
              },
            }
          },
        },
    }}>
        {filteredItems && filteredItems.map((item, index) => <DropdownItem onClick={() => handleClick(item, props.index)} key={index}>{item.name}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  )
}

export default SearchDropDown
