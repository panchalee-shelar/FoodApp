const { createContext } = require("react");

const UserContext = createContext({
    loggedIn: "default user"
});
export default UserContext;