// Ref: ( Memory leaks for unmounted components ) 
// -> https://www.rockyourcode.com/avoid-memory-leak-with-react-setstate-on-an-unmounted-component/

import { useEffect } from 'react';

const useFetch = ( url = '', options = null ) => {
    const [ data, setData ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        let isMounted = true;

        setIsLoading( true );

        fetch( url, options )
            .then( res => res.json )

            .then( data => {
                if ( isMounted ) {
                    setData( data );
                    setError( null )
                }
            } )

            .catch ( error => {
                if ( isMounted ) {
                    setError( error );
                    setData( null )
                }
            } )

            .finally( () => isMounted && setIsLoading( false ) )
    }, [ url, options ] )

    return [ data, isLoading, error ]
}

export default useFetch;