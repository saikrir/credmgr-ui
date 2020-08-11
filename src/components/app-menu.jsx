import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const AppMenu = () => {
  let history = useHistory();
  let [activeItem, setActiveItem] = useState({});
  let { url } = useRouteMatch();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    history.push(`${url}/${name}`);
  };

  return (
    <Menu color="brown" size="large" pointing>
      <Menu.Item name="search" active={activeItem === 'search'} onClick={handleItemClick}>
        Search Credential
      </Menu.Item>

      <Menu.Item name="new" active={activeItem === 'new'} onClick={handleItemClick}>
        Add New Credential
      </Menu.Item>

      <Menu.Item name="about" active={activeItem === 'about'} onClick={handleItemClick}>
        About Credential Manager
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
