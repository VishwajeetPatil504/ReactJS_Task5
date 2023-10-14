import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = () => {
        const dobDate = new Date(dob);
        const today = new Date();
        const years = today.getFullYear() - dobDate.getFullYear();
        const isBirthdayPassed = today.getMonth() > dobDate.getMonth() || (today.getMonth() === dobDate.getMonth() && today.getDate() >= dobDate.getDate());
        setAge(isBirthdayPassed ? years : years - 1);
    };

    return (
        <center>
            <table>
            <div>
                <center>
                    <h1>Age Calculator</h1>
                    <h4>Enter your date of birth</h4>
                    <label>
                        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
                    </label>
                    <br></br>
                    <button onClick={calculateAge} className="calculate-age-button">Calculate Age</button>
                    {age && <p>You are {age} years old</p>}
                </center>
            </div>
        </table>
        </center>        
    );
}

export default AgeCalculator;
