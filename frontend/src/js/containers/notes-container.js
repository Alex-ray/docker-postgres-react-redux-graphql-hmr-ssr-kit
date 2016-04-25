import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

    createNote() {
        this.props.actions.createNote({text: this.state.new_note});
        this.setState({
            new_note: ''
        });
    }

    render() {
        return (
            <div className="notes">
                {
                    this.props.notes.length ? 
                    <NotesList delete={this.props.actions.deleteNote} notes={this.props.notes} /> :
                    <p>No notes.</p>
                }
                <div className="new-note">
                    <input type="text" value={this.state.new_note} onChange={this.userInput.bind(this)}></input>
                    <button disabled={!this.state.new_note} onClick={this.createNote.bind(this)}>Add</button>
                </div>
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

