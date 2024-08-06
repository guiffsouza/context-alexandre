import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export function Box() {
  const { user, createUser } = useAuth();

  useEffect(() => {
    if (user.id === "") createUser({ id: 1, name: "Usuario 1" });
  }, [user, createUser]);

  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
}
