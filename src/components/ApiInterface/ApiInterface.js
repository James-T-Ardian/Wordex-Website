import React, {useState, useEffect} from 'react'
import './ApiInterface.css'

const InputBar = (prop) => {
    const [inputValue, setInputValue] = useState("")
    const [outputValue, setOutputValue] = useState([])

    let axios = require("axios").default;
    let options = {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${inputValue}/${prop.find}`,
        headers: {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    }


    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleButtonClick = ()=>{
        let errorOrMissingRe = [`Error: no ${prop.find}`.toUpperCase()]
        axios.request(options).then((response) => {
            if(prop.find === "rhymes"){
                setOutputValue(response.data[prop.find]["all"] == undefined || response.data[prop.find]["all"].length <= 0 ? errorOrMissingRe : response.data[prop.find]["all"])
            } else {
                setOutputValue(response.data[prop.find] == undefined || response.data[prop.find].length <= 0 ? errorOrMissingRe : response.data[prop.find])
            }
        }).catch(() =>{
            setOutputValue(errorOrMissingRe)
        }) 

    }

    useEffect(()=>{
        setOutputValue([])
    }, [prop.find])

    return (
        <div className="interface-container">
            <div className="find-description">{prop.find[0].toUpperCase() + prop.find.slice(1)}</div>
            <div className="bar-button-container">
                <input type="text" value={inputValue} onChange={handleInputChange}></input>
                <button className="input-button" onClick={handleButtonClick} disabled={inputValue.length == 0}>Submit</button>
            </div>
            <ul>
                {outputValue.map((output) => {
                    return <li key={output}> {output} </li>
                })}
            </ul>

        </div>
    )
}

export default InputBar