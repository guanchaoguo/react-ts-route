import {Link} from 'react-router-dom';
import * as React from "react";

export default class RLink extends React.Component<any, any> {
    render() {
        return <ul>
            <li><Link to="/">显示1</Link></li>
            <li><Link to="/r2">显示2</Link></li>
        </ul>
    }
}