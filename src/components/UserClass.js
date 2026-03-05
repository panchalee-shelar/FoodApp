import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count : 0,
        } ;

    }

    render(){
        const {name, location, role} = this.props ;
        const {count} = this.state ;
        return(
            <>
                <div className="container">
                    <UserContext.Consumer>
                    {({loggedIn})=> <h1 className="font-bold">{loggedIn}</h1>}
                    </UserContext.Consumer>
                    <h2>Count : {count}</h2>
                    <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Increase Count</button>
                    <h2>User 1</h2>
                    <p>Name : {name}</p>
                    <p>Location: {location}</p>
                    <p>Role: {role}</p>
                </div>
            </>
        )
    }
};
export default UserClass;