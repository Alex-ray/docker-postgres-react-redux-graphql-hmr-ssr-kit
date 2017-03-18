import React, {Component} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, FormField, FormInput, Button } from 'elemental';
import * as notesActions from '../actions/notes';
import NotesList from '../components/notes/list';

class NotesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            new_note: ''
        };
    }

    componentDidMount() {
        this.props.actions.fetchNotes();
    }

    userInput(evt) {
        this.setState({
            new_note: evt.target.value
        });
    }

    createNote(e) {
        e.preventDefault();
        this.props.actions.createNote({text: this.state.new_note});
        this.setState({
            new_note: ''
        });
    }

    render() {
        return (
            <div className="notes">
                <h1>Notes</h1>
                <Link to="/">Go back</Link>
                {
                    this.props.notes.length ? 
                    <NotesList delete={this.props.actions.deleteNote} notes={this.props.notes} /> :
                    <p>No notes.</p>
                }
                <Form type="inline" onSubmit={this.createNote.bind(this)}>
                    <FormField label="Text" htmlFor="text">
                        <FormInput type="text" placeholder="Note text" value={this.state.new_note} onChange={this.userInput.bind(this)} />
                    </FormField>
                    <FormField>
                        <Button disabled={!this.state.new_note} submit>Submit</Button>
                    </FormField>
                </Form>
            </div>
        )
    }
}

export default connect(
    function (state) {
        return {
            notes: state.notes
        }
    },
    function (dispatch) {
        return {
            actions: bindActionCreators(notesActions, dispatch)
        }
    }
)(NotesContainer);

