import React from 'react';

export default class DisplayList extends React.Component{
	render(){
		const {list, searchTerm} = this.props;
		console.log(this.props)
		return(
			<div className='list'>
			{
				list
				.filter((item) =>!searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
				.map(item=>
					<div key={item.name}>
					<h2>Name:{item.name} </h2>
					</div>
				)
			}
			</div>
		);

	}
}