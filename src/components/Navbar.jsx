import React, { useState } from 'react';
import About from './About';

function Navbar() {
    let [content, setContent] = useState('About');

    return (
        <div>
            <ul className='nav-btns'>
                <button onClick={() => setContent(About)} className='nav-el'>About Me</button>
            </ul>
            <main>{content}</main>
        </div>
    )
}

export default Navbar;