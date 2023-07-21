// import React, { useState } from "react";
// import Signin from "./signin";
// import Signup from "./signup";

// const Auth = () => {
//   const [index, setIndex] = useState(false);
//   const toggleIndex = () => {
//     setIndex((prevState) => !prevState);
//   };
//   return (
//     <div className="container">
//       {!index ? <Signin /> : <Signup />}
//       <p onClick={toggleIndex}>
//         {!index ? "New user? Click here " : "Already have an acount?"}
//       </p>
//     </div>
//   );
// };

// export default Auth;
import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;