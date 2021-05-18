import * as React from 'react'

import ListView from './ListView'

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

test( 'shows the children when the checkbox is checked', () => {

    render(<ListView/>)
    expect(screen.getByText("First")).toBeInTheDocument()
    
} );