import "../HomePages/Empowering.css"
function Empowering() {
    return (
        <>
            <div className="container-fluid Eimg d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-6 position-relative">
                            <img src="public/homeimg/h1-image.jpg" alt="" className="w-100 img-fluid" />
                            {/* Add video button image */}
                            <img
                                src="public/homeimg/video-button-1.png"
                                alt="Play Video"
                                className="video-button position-absolute top-50 start-50"
                            />
                        </div>
                        <div className="col-6 pcolor">
                            <h2 className="pcolor2">Empowering Children to reach their potential.</h2><br></br>
                            <p>Etiam porttitor risus massa nec codiment gravinda nibh vel <br></br>velit auctor aliquetnean sollicitudin, lorem quis bibendum auci <br></br>elit consequatipsutis sem nibh id sed odio sit amet nibh</p>
                            <div className="d-flex g-5">
                                <div className="me-5 textcolor">
                                    <h2>168</h2>
                                    <p>Sucess Stories</p>

                                </div>
                                <div className="ms-5 textcolor">
                                    <h2>347</h2>
                                    <p>Scheduled Events</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Empowering