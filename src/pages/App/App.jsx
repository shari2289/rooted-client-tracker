    
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as clientAPI from '../../services/clients-api';
import ClientListPage from '../../components/ClientListPage/ClientListPage';
import AddClientPage from '../../components/AddClientPage/AddClientPage.js';
import ClientDetailPage from '../../components/ClientDetailPage/ClientDetailPage';
import EditClientPage from '../../components/EditClientPage/EditClientPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      clients: [],
      styles: []
    };
  }

  async componentDidMount() {
    const clients = await clientAPI.getAll();
    this.setState({ clients: clients });
}

   /*--- Callback Methods ---*/
   handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    },
      () => this.seedMyState()
    )
  }


  handleAddClient = async newClientData => {
    const newClient = await clientAPI.create(newClientData);
    this.setState(state => ({
      clients: [...state.clients, newClient]
    }),
      () => this.props.history.push('/clients'));
  }


  handleDeleteClient = async id => {
    await clientAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      client: state.client.filter(j => j._id !== id)
    }), () => this.props.history.push('/client'));
  }


  handleUpdateClient = async updatedClientData => {
    const updatedClient = await clientAPI.update(updatedClientData);
    // Using map to replace just the client that was updated
    const newClientArr = this.state.clients.map(j =>
      j._id === updatedClient._id ? updatedClient : j
    );
    this.setState(
      { clients: newClientArr },
      // This cb function runs after state is updated
      () => this.props.history.push('/clients')
    );
  }


  

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignUpPage
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
            />
          } />
          <Route exact path='/clients' render={() => 
            <ClientListPage
              clients={this.state.clients} 
              handleDeleteClient={this.handleDeleteClient}
              />
          } />
          <Route exact path='/add' render={() =>
            <AddClientPage
              handleAddClient={this.handleAddClient}
            />
          } />
          <Route exact path='/details' render={({ location }) =>
            <ClientDetailPage
             location={location}
            />
          } />
          <Route exact path='/edit' render={({ location }) =>
            <EditClientPage
              handleUpdateClient={this.handleUpdateClient}
              location={location}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;