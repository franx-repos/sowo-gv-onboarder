import { useState, useEffect } from "react";

const useMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(storedMembers);
  }, []);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const addMember = (newMember) => {
    const isDuplicate = members.some(
      (member) => member.sowo_id === newMember.sowo_id
    );
    if (!isDuplicate) {
      setMembers((prevMembers) => [...prevMembers, newMember]);
    } else {
      console.log("Duplicate member:", newMember.sowo_id);
    }
  };

  const clearMembers = () => {
    setMembers([]);
  };

  return { members, addMember, clearMembers };
};

export default useMembers;
