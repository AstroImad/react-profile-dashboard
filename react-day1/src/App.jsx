import ProfileCard from "./ProfileCard";
import Counter from './Counter';
import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [filterRole, setFilterRole] = useState("All");
  useEffect(() => {
    const mockUsers = [
    {
      id: 1,
      name: "Imad",
      role: "Data Scientist",
      skills: ["Python", "ML", "React"]
    },
    {
      id: 2,
      name: "Eiya",
      role: "Engineer",
      skills: ["Excel", "Powerpoint", "Communication"]
    }
  ];

  setUsers(mockUsers);
  }, []);
  
  return (
    <div>
      <h1>User Directory</h1>
      
      {users.map(user => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.role}
          skills={user.skills}
        />
     ))}

      <Counter />
      
      </div>
  );
}

export default App;
