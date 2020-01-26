import React, { Fragment } from 'react'
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingNav = () => {
  // s_6.6.2
  return (
    <Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Twoj Profil" />
        <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
      </Menu>

      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Konto"
        />
        <Menu.Item>My Account</Menu.Item>
      </Menu>
    </Fragment>
  )
}

export default SettingNav;
// rcc, rafc
