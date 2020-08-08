import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const AppMenu = () => {
  let history = useHistory();
  let [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    history.push(`/${name}`);
  };

  return (
    <Menu color="teal" inverted size="large">
      <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
        Search Credential
      </Menu.Item>

      <Menu.Item name="private-home" active={activeItem === 'new'} onClick={handleItemClick}>
        Add New Credential
      </Menu.Item>

      <Menu.Item name="export" active={activeItem === 'export'} onClick={handleItemClick}>
        Export Credentials
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
