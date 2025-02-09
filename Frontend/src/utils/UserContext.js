import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "",
  setLoggedInUser: () => {}, // Provide a default function
});

export default UserContext;
