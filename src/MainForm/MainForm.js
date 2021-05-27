import React, { Component } from 'react';
import './MainForm.css'

import Features from '../Features/Features';

class MainForm extends Component {
    render() {
        return (
            <div className="MainForm">
                <header className="heading">
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <div className="main__form">
                    <form className="main__form">
                        <Features 
                            features = {this.props.features} />
                    </form>
                </div>
            </div>
        )
    }
}

export default MainForm;