import React from 'react'
import ReactDom from 'react-dom'
import List from './containers/List'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className='container-fluid'>
            <List />
        </div>
    )
};

ReactDom.render(<App />, document.getElementById('root'))
