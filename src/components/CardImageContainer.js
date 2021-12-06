// container that does data fetching and then renders
// corresponding sub-component

import { render } from '@testing-library/react';
import React from 'react';

export default function CardImageContainer() {
    state = {
        catImages: [],
    };

    render() {
        return <div>{this.state.catImages.map((cat) => cat.)}</div>
    }
    
    
}
