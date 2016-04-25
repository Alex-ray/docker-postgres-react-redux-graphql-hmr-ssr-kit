import React, {Component} from 'react';
import { Link } from 'react-router'

export default class HomeContainer extends Component {

    render() {
        return (
            <div>
                <h1>Example app</h1>
                <p>Hi! This is an example app.</p>
                <Link to="/notes">notes</Link>
            </div>
        )
    }
}