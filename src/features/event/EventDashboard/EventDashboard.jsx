import React, { Component } from 'react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

class EventDashboard extends Component {
    render(){
        return (
            <Grid>
            <Grid.Column width={10}>
                <h2>left col</h2>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Right col</h2>
            </Grid.Column>
            </Grid>
                
        )
    }
}
export default EventDashboard