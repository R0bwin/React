import React from 'react';

import 'styles/footer.scss';

var style = {
    position: "absolute",
    bottom: "0",
    width: "100%",
}

function Footer() {
    return (
        <footer className="page-footer font-small bg-dark" style={style}>
            <div className="container">

                <ul className="list-unstyled list-inline text-center pt-4 mb-0">

                <li className="list-inline-item">
                    <a className="btn-floating mx-1" href="https://github.com/R0bwin" target="_blank">
                        <i className="fa fa-2x fa-github-square github-bg text-white"></i>
                    </a>
                </li>

                <li className="list-inline-item">
                    <a className="btn-floating mx-1" href="https://www.linkedin.com/in/robin-winroth/" target="_blank">
                        <i className="fa fa-2x fa-linkedin linkedin-bg text-white"></i>
                    </a>
                </li>

                </ul>

            </div>
            <div className="footer-copyright text-center py-3 text-white">Copyright © {(new Date().getFullYear())}  
                <a className="text-white"> Robin Winroth</a>
            </div>
        </footer>
    )
}

export default Footer