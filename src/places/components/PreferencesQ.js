import React from 'react';

import './PreferencesQ.css'

const PreferencesQ = () => {
    return (
        <React.Fragment>
            <h2 className="preferences-header">Preferences :</h2>
            <div className="question-row">
                <h3 className="question1">Do you prefer staying early or starting late?</h3>
                <div className="option-row">
                    <input className="option" type="radio" name="question1" id="q1firstOption" value="q1firstOption" />
                    <label htmlFor="q1firstOption">Start early</label> 
                    <br /> 
                    <input className="option" type="radio" name="question1" id="q1secondOption" value="q1secondOption" />
                    <label htmlFor="q1secondOption">Start late</label>
                </div>
            </div>
            <div className="question-row">
                <h3 className="question2">Do you want free days?</h3>
                <div className="option-row">
                    <input className="option" type="radio" name="question2" id="q2firstOption" value="q2firstOption" />
                    <label htmlFor="q2firstOption">Yes</label> 
                    <br /> 
                    <input className="option" type="radio" name="question2" id="q2secondOption" value="q2secondOption" />
                    <label htmlFor="q2secondOption">No</label>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PreferencesQ;