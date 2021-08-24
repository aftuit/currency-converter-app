import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (    
        <div className="not-found">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <img src="/assets/image/notfound.jpg" className="w-100" alt="" />
                    </div>
                    <div className="col-4">
                        <h1>404</h1>
                        <p>Page Not Found</p>

                        <Link to="/" className="text-decoration-none">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;