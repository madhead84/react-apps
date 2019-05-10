import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {

    sate = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type='text'
                   className='form-control search-input'
                   placeholder='Type here to search'
                   value={this.setState.term}
                   onChange={this.onSearchChange}/>
        );
    }


};