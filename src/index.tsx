import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Rts from "../components/route";



class Demo {
    name: string = "";

    constructor() {
        this.name = "Hello World";
    }
}

const render = () => {

    ReactDOM.render(
        // <CssDemo/>,
        // <div>
        //     {new Demo().name}
        //     <User name="李雷"/>
        //     <User name="韩梅梅"/>
        //     {/*<CssDemo/>,*/}
        // </div>,
        <Rts></Rts>,
        document.querySelector('#app')
    )
}
render();