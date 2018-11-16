import React, { Component } from 'react';
import Layout from './components/ui/Layout/Layout';
import SummaryPage from './containers/summary/SummaryPage'
import AddClientPage from './containers/client/AddClientPage';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    state = {
        drawerOpen: false
    }

  render() {
    return (
        <BrowserRouter>
          <div>
              <Layout toggleDrawer={this.toggleDrawer} drawerOpen={this.state.drawerOpen}>
                  <Route exact path="/" component={SummaryPage} />
                  <Route path="/client/add" component={AddClientPage}/>
              </Layout>
          </div>
        </BrowserRouter>
    );
  }

  toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen});
  }
}

export default App;
