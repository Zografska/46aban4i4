
import React, { useCallback, useState } from 'react';
import { HoroscopeResult, getCompatibility } from '../api';

const Horoscope: React.FC = () => {

    const [name, setName] = useState("")
    const [showValidation, setShowValidation] = useState(false)
    const [result, setResult] = useState<HoroscopeResult | null>(null)
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
            setResult(response)
        })
        
    }, [date, name, showValidation])

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
            {result ? 
            <div className="gantt-chart">
              {
                Object.keys(result).map(key => {
                    const value = result[key as keyof HoroscopeResult]
                    if(key === "name")
                    {
                        return <h2 className='result'>{key}: {value}</h2>
                    }
                    return  <div className="gantt-row">
                    <div className="task" key={key} style={{width: `${value *10}%`}}>{key}</div>
                </div>
                })
              }
            </div> 
            :
             <div></div>}

            </div>
        </div>
    );
};

export default Horoscope;
