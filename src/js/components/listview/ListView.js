import React from 'react'
import useXHR from '../hooks/usexhr/useXHR'
import { Link } from "react-router-dom";

const ListView = () => {
    const [ data, isLoading, error ] = useXHR( "https://jsonplaceholder.typicode.com/posts" )
    
    if ( isLoading ) return "Loading...";

    if ( error ) return "Something went wrong :-/"

    if ( data ) return (
        <ol>
            <h3>Retrieved Data</h3>

            { data.map( ( item, i ) => (
                <li key={ item.id }>
                    <Link to={ "/details?id=" + item.id }>{ item.title }</Link>
                </li>
            ) ) }            
        </ol>
    )

    return (<p>No Data Found</p>)
}

export default ListView;
