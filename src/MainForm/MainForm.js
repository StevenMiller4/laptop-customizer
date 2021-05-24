import React, { Component } from 'react';
import './MainForm.css'
import Features from '../Features/Features';

class MainForm extends Component {
    render() {
        return (
            <div className="MainForm">
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    <Features />
                </form>
            </div>
        )
    }
}

export default MainForm;