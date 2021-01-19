import React from 'react';
import './DirectoryMenu.scss';
import MenuItem from '../MenuItem/MenuItem';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directorySelectors';

const DirectoryMenu = ({sections}) => (
	<div className='directoryMenu'>
		{sections.map(({title, imageUrl,id, size,
      linkUrl}) =>
			(
			<MenuItem key={id} title={title} size={size} 
			imageUrl={imageUrl} linkUrl={linkUrl}/>	
			))}
	</div>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(DirectoryMenu);