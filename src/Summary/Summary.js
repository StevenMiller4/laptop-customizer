import React, { Component } from 'react';
import './Summary.css';

import SummaryOption from '../SummaryOption/SummaryOption';

class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
  
            return (
                <div className="main__summary">
                    <h2>Your cart</h2>
                    <SummaryOption 
                        featureHash = {featureHash}
                        selectedOption = {selectedOption}
                        feature = {feature}
                    />
                </div>
            );
        });
        return (
            <div>
                {summary}
            </div>
        );
    }
}

export default Summary;