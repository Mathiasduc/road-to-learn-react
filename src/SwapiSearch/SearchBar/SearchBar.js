import React from 'react';

export default class SearchBar extends React.Component{
    render(){
        const { value, onChange } = this.props;
        return(
            <input type="search" value={value} onChange={onChange} />
            );
    }
}