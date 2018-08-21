import React from "react";
import colors from "../colors.json";
import Pagination from "react-js-pagination";
export default class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log(colors);
        var myData = Object.keys(colors).map(key => {
            return colors[key];
        })
        this.state = {
            colors: Object.entries(colors),
            selected: 0,
            selectedProperties: [],
            showDetaits: false,
            details: []
        }




        console.log(Object.entries(colors));

    }

    componentWillMount() {
        this.setState({ selectedProperties: Object.values(this.state.colors[0][1]) })
    }
    selectedColor(i) {
        this.setState({ selected: i, showDetaits: false });
        this.setState({ selectedProperties: Object.values(this.state.colors[i][1]) })
    }
    selectRandomColor() {

        let randomNumber = Math.floor(Math.random() * this.state.colors.length);
        this.setState({ selected: randomNumber, showDetaits: false })
        this.setState({ selectedProperties: Object.values(this.state.colors[randomNumber][1]) })
    }

    viewDetails(item) {
        var array = [item];
        for (var i = 0; i < 5; i++) {
            array.push(this.state.selectedProperties[i])

        }

        console.log(item);

        console.log(array);

        this.setState({ details: array, showDetaits: true })
    }

    clear() {
        this.setState({ showDetaits: false })
    }

    search(e) {

        console.log(e.target.value);

        for (let i = 0; i < this.state.colors.length; i++) {

            if (Object.values(this.state.colors[i][1]).includes(e.target.value)) {


                console.log(Object.values(this.state.colors[i][1]));

                this.setState({ selected: i, selectedProperties: Object.values(this.state.colors[i][1]) })
            }



        }
    }

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
                                        <input type="text" placeholder="Search" className="form-control" onChange={(e) => this.search(e)} />
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
                                        <p><a className="random-color" onClick={() => this.selectRandomColor()}>Random Color</a></p>
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav mr-auto">
                                                    {this.state.colors.map((item, i) => (
                                                        <li className={i == this.state.selected ? "nav-item active" : "nav-item"}><a className="nav-link" onClick={() => this.selectedColor(i)} >{item[0]}</a></li>
                                                    ))}

                                                    {/* <li className="nav-item active"><a className="nav-link" href="#">Orange</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Yellow</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Green</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Blue</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Purple</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Brown</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Gray</a></li> */}
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>



                                {!this.state.showDetaits ? (
                                    <div className="col-md-9">

                                        <div className="color-wrap">
                                            <div className="row">
                                                {this.state.selectedProperties.map((item, i) => (
                                                    <div className="col-lg-3 col-6" onClick={() => this.viewDetails(item)}>
                                                        <div className="color-contain">
                                                            <div className="color" style={{ background: item }}></div>
                                                            <div className="color-info">{item}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <!-- row --> */}

                                            <nav aria-label="Page navigation">
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                                </ul>
                                            </nav>

                                        </div>
                                        {/* <!-- sections-wrap --> */}
                                    </div>
                                ) : (



                                        <div className="col-md-9">

                                            <div className="color-wrap">



                                                <div className="color-wrap">
                                                    {/* {i == 0 ? ( */}
                                                    <div className="color-contain color-lg">
                                                        <div className="color" style={{ background: this.state.details[0] }}></div>
                                                        <div className="color-info">{this.state.details[0] }</div>
                                                    </div>
                                                    {/* ) : ( */}

                                                    <div className="row row-five">
                                                        {this.state.details.map((item, i) => (

                                                            <div className="col-lg-3 col-6">
                                                                <div className="color-contain">
                                                                    <div className="color" style={{ background: item }}></div>
                                                                    <div className="color-info">
                                                                        {item}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>



                                                </div>
                                                {/*  */}
                                                {/* <!-- row --> */}

                                                <p className="text-center">
                                                    <a className="btn btn-outline-info" onClick={() => this.clear()}>Clear</a>
                                                </p>

                                            </div>
                                            {/* <!-- sections-wrap --> */}

                                        </div>


                                    )}
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