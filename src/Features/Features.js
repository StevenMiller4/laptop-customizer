import React, { Component } from 'react';
import './Features.css'

import Options from '../Options/Options';

class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
  
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Options 
                        features = {this.props.features}
                    />
                </fieldset>
            );
        });
        return (
            <div className="Features">
                <h2>Customize your laptop</h2>
                    {features}
            </div>
        )
    }
}

export default Features;