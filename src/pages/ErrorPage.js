import React from 'react'
import { Link } from 'react-router-dom';
import "../components/Book/book.css"

export default function ErrorPage() {
    return (
        <div className='error' style={{height : "100vh", backgroundColor : "white"}}>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not avaible!</p>
                                    <Link to="/" className="btn btn-outline-primary">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
