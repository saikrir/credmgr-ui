import React from 'react';
import { Icon } from 'semantic-ui-react';

const AppFooter = () => {
  let dateYear = new Date().getFullYear();
  return (
    <div className='ui  vertical footer segment'>
      <p>
        All Rights Reserverd {dateYear}, &nbsp; <Icon name='copyright outline'></Icon> Sai Katterishetty
        <Icon name='trademark'></Icon>
      </p>
    </div>
  );
};

export default AppFooter;
