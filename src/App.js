import React, { useEffect, useState } from "react";
import API from "./services/api";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";         // 👈 make sure path is correct
import UsersList from "./pages/UsersList"; // 👈 make sure path is correct

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   API.get("/users")
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, []);



  const handleLogin = async () => {
  try {
    const res = await API.post("http://localhost:8080/auth/login", {
      email: "ali@gmail.com",
      password: "ali",
    });
    localStorage.setItem("token", res.data.token);
    alert("Login successful!");
  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};

  // return (
  //   <div>
  //     <h1>Users List</h1>

      
  //     <ul>
  //       {users.map((u) => (
  //         <li key={u.id}>{u.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );


  return (

    <>
     <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white">✅ Tailwind is working! Its test commit to deploy using CI/CD pipelines next iterations with invalidations</h1>
    </div>
     <Router>
      <Routes> 
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
    </>
   
  );

}

export default App;
