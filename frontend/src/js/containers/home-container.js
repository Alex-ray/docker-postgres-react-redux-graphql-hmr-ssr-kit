import React, {Component} from 'react';
import { Link } from 'react-router'
import { Alert, Button } from 'elemental';

export default class HomeContainer extends Component {

    render() {
        return (
            <div className="home">
                <h1>Example app</h1>
                <Alert type="info">Hi! This is a sample app.</Alert>
                <Link to="/notes">
                    <Button>Go to notes</Button>
                </Link>
            </div>
        )
    }
}