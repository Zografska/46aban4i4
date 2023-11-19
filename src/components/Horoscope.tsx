
import React, { useCallback, useState } from 'react';
import { getCompatibility } from '../api';

const Horoscope: React.FC = () => {

    const [name, setName] = useState("")
    const [showValidation, setShowValidation] = useState(false)
    const [result, setResult] = useState("")
    const [date, setDate] = useState("")

    const onClick = useCallback(():void => {
        if (!name || !date) {
            setShowValidation(true)
            return
        }

        const [year, month, day] = date.split("-") 
        if (!(year && month && day)){
            setShowValidation(true)
            return
        }

        if(!showValidation){
            setShowValidation(false)
        }

        const formatted = `${month}/${day}/${year}`
        getCompatibility(name, formatted).then(response => {
            // console.log(response[0])
            // TODO: add response
            setResult(response[0])
        })
        
    }, [date, name, showValidation, result])

    return (
        <div className="compatibility-form-container">
            <h2 >Compatibility Test</h2>
            <div id="compatibility-form">
                {showValidation ?? "ur input is not valid 🥺"}
                <div className="form-group">
                    <label>Your Name</label>
                    <input value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Your Birthday:</label>
                    <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                </div>
                <button type="submit" onClick={onClick}>Test Compatibility</button>
            </div>
            <div>
            <h2>{result}</h2>
            </div>
        </div>
    );
};

export default Horoscope;
