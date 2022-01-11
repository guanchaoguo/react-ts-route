import * as React from "react";

interface UserState {
    createTime: Date
}

interface UserProp {
    name: string
}

export default class User extends React.Component<UserProp, UserState> {
    constructor(props: UserProp) {
        super(props);
        this.state = {createTime: new Date()};
    }

    render() {
        return <div>
            <p>我是User组件</p>
            <p>我的名字是{this.props.name}</p>
            <p>我的创建时间是{this.state.createTime.toString()}</p>
        </div>
    };
}