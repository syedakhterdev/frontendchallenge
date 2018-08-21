import React from "react";

export default class Details extends React.Component {

    render() {
        return (

            <div id="container-fluid">


                {/* <!--header start --> */}
                <div id="header-wrap">
                    <div className="container">
                        <header id="header">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="logo">
                                        <a href="#"><img src="/assets/images/logo.png" alt="Logo" /></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="search-section">
                                        <input type="text" placeholder="Search" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
                {/* <!--header end --> */}


                <div id="main-wrap">
                    <div className="container">
                        <div className="main">

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="sidebar">
                                        <p><a href="#" className="random-color">Random Color</a></p>
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav mr-auto">
                                                    <li className="nav-item"><a className="nav-link" href="#">Red</a></li>
                                                    <li className="nav-item active"><a className="nav-link" href="#">Orange</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Yellow</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Green</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Blue</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Purple</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Brown</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Gray</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="color-wrap">

                                        <div className="color-contain color-lg">
                                            <div className="color" style={{background: "#9fc6bb"}}></div>
                                            <div className="color-info">#cfff1</div>
                                        </div>

                                        <div className="row row-five">

                                            <div className="col-lg-3 col-6">
                                                <div className="color-contain">
                                                    <div className="color" style={{background: "#dcf9f1"}}></div>
                                                    <div className="color-info">
                                                        #cfff1
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- row --> */}

                                        <p className="text-center">
                                            <a href="#" className="btn btn-outline-info">Clear</a>
                                        </p>

                                    </div>
                                    {/* <!-- sections-wrap --> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- main-wrap --> */}




            </div>
            // {/* <!--container-fluid --> */ }




        )
    }
} 