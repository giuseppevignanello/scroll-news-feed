import React from 'react'

const JumboTron = () => {
    return (
        <div>
            <div className="p-5 mb-4 rounded-3 bg-black text-white">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Main News</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ullam harum iusto deleniti, id sint possimus modi, eligendi culpa consectetur ad perferendis corporis consequuntur deserunt..</p>
                    <button className="jumbo_btn bg_tertiary btn-lg" type="button">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default JumboTron