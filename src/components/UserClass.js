import React from "react";
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
                <h2>Count : {count}</h2>
                <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Increase Count</button>
                <h2>User 1</h2>
                <p>Name : {name}</p>
                <p>Location: {location}</p>
                <p>Role: {role}</p>
            </>
        )
    }
};
export default UserClass;