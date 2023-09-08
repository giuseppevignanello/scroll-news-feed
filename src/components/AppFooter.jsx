import React from 'react'

const AppHeader = () => {
    return (
        <div className='bg-dark'>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top text-white">
                    <div className="col mb-3">
                        <p className="text-white">&copy; 2022</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AppHeader