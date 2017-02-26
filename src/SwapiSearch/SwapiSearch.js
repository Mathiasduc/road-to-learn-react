import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import DisplayList from './DisplayList/DisplayList';
import axios from 'axios';


export default class SwapiSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            list: [{name: "notfound"}],
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    onSearchChange(event){
        this.setState({searchTerm: event.target.value});
    }

    componentDidMount(){
        const me = this;
        axios.get('http://swapi.co/api/people')
        .then(function (response) {
            me.setState({list: response.data.results});
            console.log(me.state.list);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {;
        const {list, searchTerm} = this.state;
        return(
        <div>
            <SearchBar value={searchTerm} onChange={this.onSearchChange}/>
            <DisplayList searchTerm={searchTerm} list={list}/>
        </div>
        );
    }
}