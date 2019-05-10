import React, {Component} from 'react';

import './todo-list-item.css'


export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleImporttant, onToggleDone, important, done} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className='todo-list-item-label'
                    //onClick={ this.onLabelClick.bind(this) } >
                    onClick={onToggleDone}>
                    {label}
                </span>
                    <button type='button'
                            className='btn btn-outline-success btn-sm float-right'
                            onClick={onToggleImporttant}>
                        <i className='fa fa-exclamation'/>
                    </button>

                    <button type='button' className='btn btn-outline-danger btn-sm float-right'
                            onClick={onDeleted}>
                        <i className='fa fa-trash-o'/>
                    </button>
            </span>
        )
    }
}