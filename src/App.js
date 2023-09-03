import { useEffect, useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberList from "./components/Memberlist";
import "./styles.css";

export default function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((membersResponse) => {
    //     setMembers(membersResponse);
    //   });

    const fetchMembers = async () => {
      const membersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const memberList = await membersResponse.json();
      setMembers(memberList);
    };

    fetchMembers();
  }, []);

  const handleAddMember = (member) => {
    setMembers([member, ...members]);
  };

  return (
    <div className="App">
      <MemberForm onSubmit={handleAddMember} />
      <MemberList data={members} />
    </div>
  );
}
