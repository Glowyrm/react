import * as React from 'react'
import * as ReactDOM from 'react-dom'

import ListView from './ListView'

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

test( 'shows the children when the checkbox is checked', () => {

    const root = document.createElement('div');
    ReactDOM.render(<ListView/>, root)

    expect(root.querySelector("#first").textContent).toBe("First")

} );