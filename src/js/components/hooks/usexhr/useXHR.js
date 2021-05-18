// Ref: ( Memory leaks for unmounted components ) 
// -> https://www.rockyourcode.com/avoid-memory-leak-with-react-setstate-on-an-unmounted-component/

import { useState, useEffect } from 'react';

const xhrWithCancel = ( url, referenceObj ) => {
    let xhr = new XMLHttpRequest();

    xhr.open( "GET", url );
    xhr.send();

    return new Promise( ( resolve, reject ) => {
        xhr.onload = () => {
            resolve( xhr.responseText )
        }

        xhr.onerror = () => {
            reject( new Error("Error occurred during request") )
        };

        referenceObj.cancel = () => {
            xhr.abort();
            reject( new Error("Cancelled") );
        }
    } );
}

const dataTypeCheck = ( data ) => {
    if ( data === null ) { return "Null-Type" };
    if ( typeof data === 'object' ) {return "Object-Type"};
    if ( Array.isArray(data) ) {return "Array-Type"};
    if ( typeof data === 'string' ) {return "String-Type"};
    if ( typeof data === 'number' ) {return "Numeric-Type"};
    if ( typeof data === 'boolean' ) {return "Boolean-Type"};

    return "Unaccounted-Type"
}

const useXHR = ( url = '' ) => {
    const [ data, setData ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        let myReferenceObj = {};

        setIsLoading( true );

        xhrWithCancel( url, myReferenceObj )
            .then( res => {
                setData( JSON.parse( res ) );
                setError( null )

                console.log( "Data Retrieved" )
                console.log( dataTypeCheck( JSON.parse( res ) ) )
                console.log( JSON.parse( res ) )
            } )
            .catch ( error => {
                setError( error )
            })
            .finally( () => setIsLoading( false ) )

        return () => {
            myReferenceObj.cancel()
        }
    }, [ url ] );

    return [ data, isLoading, error ]
}

export default useXHR;