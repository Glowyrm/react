import React, { useEffect, useState } from 'react';
import useXHR from '../hooks/usexhr/useXHR'

function DetailsView() {
    const params = new URLSearchParams(window.location.search);
    const urlParam = params.get( "id" );

    const [ postData, postIsLoading, postError ] = useXHR( "https://jsonplaceholder.typicode.com/posts/" + urlParam )
    const [ commentData, commentIsLoading, commentError ] = useXHR( "https://jsonplaceholder.typicode.com/posts/" + urlParam + "/comments" )

    if ( postIsLoading ) return "Loading...";

    if ( postError ) return "Something went wrong :-/"

    if ( postData ) return (
        <ol>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>

            { commentIsLoading && "Loading..." }
            { commentError && "Something went wrong :-/" }

            { commentData && commentData.map( ( item, i ) => (
                <li key={ item.id }>
                    <div>{ "Name: " + item.name }</div>
                    <div>{ "Email: " + item.email }</div>
                    <p>{ item.body }</p>
                </li>
            ) ) }            
        </ol>
    )

    return (<p>No Data Found</p>)
}

export default DetailsView
