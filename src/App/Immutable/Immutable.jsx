import React from 'react';

import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2, c:3 });
const map2 = map1.set('b', 50);

const immutableTEst = () => {
    return <div>
        {map1.get('b')} Vs. {map2.get('b')}
    </div>
};

export default immutableTEst;


