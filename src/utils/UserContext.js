const { createContext } = require("react");

// we can access this data from anywhere in map
const UserContext = createContext({
  loggedInUser: "Vishal Sharma",
});

export default UserContext;
