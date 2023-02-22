import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchStates} from './LineData';
import "./formwidgets.css"
function StateSelector({handleStateChange}){
    const[fetchState, setFetchState] = useState([])


    useEffect(() => {
        const fetchAPI = async() => {
            setFetchState(await fetchStates());
        }
        fetchAPI();
    }, [setFetchState])

    console.log(fetchState);

    return(
        <FormControl className={formControl}>
        <NativeSelect defaultValue="" onChange = {(e) => handleStateChange(e.target.value)} variant="filled">
            <option value="">State</option>
        {fetchState.map((state, i) => <option key={i} value={state}>{state}
        </option>)}
        </NativeSelect>
        </FormControl>


    )


}


export default StateSelector;




