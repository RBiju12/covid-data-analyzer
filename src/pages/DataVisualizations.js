import React, {useState} from 'react'

function DataVisualizations(){

    const[data, setData] = useState([])


    const ApiData = () => {
        fetch("https://api.covidactnow.org/v2/states.json?apiKey=0619b64874b843fead2c2517b3f6b0f1")
        .then((response) => response.json())
        .then((json)=> {
            console.log(json);
            setData(json);

    });
}




    return(
        <>
        <div id="Datacontain">
        <h1>Data Visualizations</h1>
        <button onClick={ApiData}>Get API</button>
        
       <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </>
    )

}

export default DataVisualizations;