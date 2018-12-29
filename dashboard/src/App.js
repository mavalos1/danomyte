import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { 
  Notification
} from 'grommet-icons';
import theme from './theme';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

  
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false,
    };

    this.handleNotificationClick = this.handleNotificationClick.bind(this);
  }

  handleNotificationClick() {
    const { showSideBar } = this.state;
    this.setState({ showSideBar: !showSideBar });
  }
  render() {
    const { showSideBar } = this.state;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                {size}
                <Heading level='3' margin='none'>CORNER-STORE</Heading>
                <Button 
                  icon={<Notification />} 
                  onClick={this.handleNotificationClick}
                />
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  app body
                </Box>
                <Collapsible direction='horizontal' open={showSideBar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Collapsible>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
