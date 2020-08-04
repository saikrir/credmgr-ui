import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const AppMenu = () => {
  let [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu color="teal" inverted size="large">
      <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
        Search Credential
      </Menu.Item>

      <Menu.Item name="add" active={activeItem === 'add'} onClick={handleItemClick}>
        Add New Credential
      </Menu.Item>

      <Menu.Item name="export" active={activeItem === 'export'} onClick={handleItemClick}>
        Export Credentials
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
