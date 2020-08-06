import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class GoBack extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <button onClick={this.goBack.bind(this)}>返回</button>
        )
    }
}
export default withRouter(GoBack)