import {Component, use} from "react";
import { json } from "react-router-dom";
class User2Class extends Component{
    constructor(props){
        super(props);
        // state variable
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location"
            }
        }
    }   
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/panchalee-shelar');
        const json = await data.json();
        console.log(json);
        this.setState({userInfo: json})
    }    
    render(){
        const{name, location, company, avatar_url}= this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h3>Name: {name || "PS"}</h3>
                <h3>Location: {location}</h3>
                <h3>Company: {company}</h3>
            </div>
        )
    }
}
export default User2Class;