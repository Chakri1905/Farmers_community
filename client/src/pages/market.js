import React from 'react';
import AgricultureProductsPage from './products';
import Producttable from './producttable';

const Market = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Right',
	// 	alignItems: 'Right',
	// 	height: '100vh'
	// }}
	>
        <div className='agricultureproductspage'>
    <AgricultureProductsPage/>
    </div>
    <div className='product table'>
    <Producttable/>
    </div>
	</div>
    
);
};

export default Market;
