import React from 'react';
import './mystyle.css'
function Style(props) {
 
    return ( 
        <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',   backgroundColor:'darkgray'}}>
        <h1 className='primary'> REACT BUTTON EXAMPLE</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='sec' >sample Button</button>
        <button className='thi'>Matti! Button</button>
        <button className='secr'>simple Button</button>
        </div>
        </div>
     );
}

export default Style;