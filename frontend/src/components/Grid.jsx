import React from 'react';
import {Provider1} from '../context/Context1';
import {Provider2} from '../context/Context2';
import { Provider3 } from '../context/Context3';
import { Provider4 } from '../context/Context4';
import { Provider5 } from '../context/Context5';
import W1 from './W1';
import W2 from './W2';
import W3 from './W3';
import W4 from './W4';
import W5 from './W5';
import W6 from './W6';
import W7 from './W7';
import W8 from './W8';

const Grid = () => {
  return (
    <React.Fragment>
        <Provider1>
        <Provider2>
        <Provider3>
        <Provider4>
        <Provider5>
            <section>
                <div className='layout'>
                    <div className="w1 centered">
                        <W1/>
                    </div>
                    <div className="w2 centered">
                        <W2/>
                    </div>
                    <div className="w3 centered">
                        <W3/>
                    </div>
                    <div className="w4 centered">
                        <W4/>
                    </div>
                    <div className="w5 centered">
                        <W5/>
                    </div>
                    <div className="w6 centered">
                        <W6/>
                    </div>
                    <div className="w7 centered">
                        <W7/>
                    </div>
                    <div className="w8 centered">
                        <W8/>
                    </div>
                </div>
            </section>
        </Provider5>
        </Provider4>
        </Provider3>
        </Provider2>
        </Provider1>
    </React.Fragment>
    );
};

export default Grid;