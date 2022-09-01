import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

const EmailUnsubscribe = () => {
    const location = useLocation();
    console.log(location);
    return (
        <Fragment>
            {
                location.pathname === '/unsubscribed' &&
                <div className='unsubscribe-box'>
                    <h2>UNSUBSCRIBE SUCCESSFUL</h2>
                    <p>You'll no longer receive this email</p>
                </div>

            }
            {
                location.pathname === '/not-unsubscribed' &&
                <div className='unsubscribe-box'>
                    <h2>UNSUBSCRIBE FAILED</h2>
                    <p>You were already unsubscribed from this mail</p>
                </div>

            }
        </Fragment>
    );
}

export default EmailUnsubscribe;