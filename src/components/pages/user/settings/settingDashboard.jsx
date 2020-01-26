import React from 'react'
import { Grid } from 'semantic-ui-react';
import SettingNav from './settingNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './basicPage';
import AboutPage from './aboutPage';
import AccountPage from './accountPage';
import PhotosPage from './photosPage';

const SettingDashboard = () => {
  return (
    // lewa kolumna wyswietla komponent z opcje 
    // w zaleznosci od opcji kliknietej w prawej kolumnie

    // Po zaladowaniu tego komponentu Robimy Redurecta do BASIC
    // ktor dzieku temu zostanie otworzyny w lewej kolunie
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/photos' component={PhotosPage} />
          <Route path='/settings/account' component={AccountPage} />
        </Switch>

      </Grid.Column>
      <Grid.Column width={4}>
        <h1><SettingNav /></h1>
      </Grid.Column>
    </Grid>
  )
}

export default SettingDashboard;
// rcc, rafc
