import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPagePicture from '../../../static/assets/auth/brewing.jpg'

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div 
            className='left-column'
            style={{
                background: 'url(' + contactPagePicture + ') no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: "center"
            }}
        />

            <div className='right-column'>
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon='mobile-retro' />
                        </div>

                        <div className="text">
                            443-567-8138
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon='envelope-open-text' />
                        </div>

                        <div className="text">
                            josh@anturiodevelopment.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon='globe' />
                        </div>

                        <div className="text">
                            Prior Lake, Minnesota
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}