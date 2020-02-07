
import React from "react";
import {Grid,Header} from "semantic-ui-react";


function appName() {
     return(
         <Grid >
             <Grid.Column textAlign="center">
                <Header as='h1' style={ {marginTop:'20px'}  }>TO DO LIST</Header>
             </Grid.Column>
         </Grid>
     )
}

export default appName;