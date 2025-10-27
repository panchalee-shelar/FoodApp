import User from "./User";
import UserClass from "./UserClass";

const ContactUs = ()=>{
    return(
        <>
            <div className="container">
                <h1>Contac Us Page</h1>
                <UserClass name='Purva (class)' location='Pune' role='Singer'/>
                <User name='Sam (Function)' location='Banglore' role='Dancer'/>
            </div>
        </>
    )
}
export default ContactUs;