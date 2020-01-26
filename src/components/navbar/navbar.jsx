import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link,withRouter } from 'react-router-dom';
import SignOutMenu from '../menu/signOutMenu';
import SignInMenu from '../menu/signInMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  }
  handleSignIn = () =>
    this.setState({ authenticated: true })
    handleSignOut = () =>
    {this.setState({ authenticated: false})
    this.props.history.push('/')
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src="/assets/images/logo.png" alt="logo" />
            Re-vents
                </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name="Events" />
          <Menu.Item as={NavLink} to='/people' name="People" />
          <Menu.Item>
            <Button
              as={Link} to='/createEvent'
              floated="right"
              positive inverted content="Nowy Event" />
          </Menu.Item>
          {authenticated 
            ?
             <SignInMenu signOut={this.handleSignOut}/>
              : 
              <SignOutMenu signIn={this.handleSignIn}/>}
        </Container>
      </Menu>
    );
  }
}
//ES7 React/Redux/GraphQL/React-Native snippets
// snippets s_3.4.2 navbar
export default withRouter(NavBar);
