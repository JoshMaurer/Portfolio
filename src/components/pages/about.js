import React from 'react';
import profilePicture from '../../../static/assets/auth/about/headshot.jpg'

export default function() {
  return (
        <div className='content-page-wrapper'>
            <div 
            className='left-column'
            style={{
                background: 'url(' + profilePicture + ') no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: "center"
            }}
            />

            <div className='right-column'>
                Place Holder Content
            </div>
        </div>
    );
}