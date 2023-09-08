import React from 'react'

const AppHeader = () => {
    return (
        <div>
            <header className='appHeader d-flex justify-content-between bg-dark align-items-center py-3'>
                <div className='social_icon d-flex gap-1 align-items-center text-white ms-2'>
                    <i class="fa-brands fa-square-x-twitter fa-xl"></i>
                    <i class="fa-brands fa-square-facebook fa-xl"></i>
                    <i class="fa-brands fa-square-instagram fa-xl"></i>
                    <i class="fa-brands fa-youtube fa-xl"></i>
                </div>
                <div className='logo_image'>
                    <img src="../../public/img/detales_logo.png" alt="" />
                </div>
                <div>
                    <a href="" className='text-white text-decoration-none me-2'>Newsletter</a>
                </div>
            </header>
        </div>
    )
}

export default AppHeader