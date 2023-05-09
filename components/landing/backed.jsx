import React from 'react';

function Backed() {
    return (
    <div style={{ padding: '5% 0' }}>
        <div className='container'>
            <p className='backed_text'>Backed by</p>
        </div>
        <img src="./buildspace.svg" alt="Buildspace" width="160" height="95" />
        <br />
    </div>
    );
}

export default Backed;