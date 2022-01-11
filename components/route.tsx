import * as React from "react";
import R1 from "./r1";
import R2 from "./r2"
import RLink from "./rlink";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default class Rts extends React.Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div className="max-w-screen-md mx-auto pt-20">
                    <Routes>
                        {/*<RLink></RLink>*/}
                        <Route path="/" element={<R1/>}/>
                        <Route path="/r2" element={<R2/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}