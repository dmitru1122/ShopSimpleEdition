import React from 'react';
import Filter from './filter/allFilterConteiner';
import Content from './content/index';

import {BrowserRouter, Route} from 'react-router-dom';
class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const resultClass = this.props.styleClass + ' ' + 'main';
        return (
            <BrowserRouter >
            <main className={resultClass}>
                    <Route path="/catalog" component={Filter}/>
                    <Content path="/catalog" component={Content}/>
            </main>
            </BrowserRouter>
        )
    }
}

export default Main;