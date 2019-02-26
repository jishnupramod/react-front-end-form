import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <br/>
                    <h1> Thank You for Submitting the Form. </h1>
                    <p> You will be e-mailed with Further instructions </p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success
