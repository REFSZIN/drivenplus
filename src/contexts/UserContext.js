import { createContext } from "react";
import { useEffect, useState } from "react";
const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [nome, setNome] = useState('');

  useEffect(() => {
    setNome(prompt("Digite seu nome"));
  }, []);

  return (
    <UserContext.Provider value={{nome, setNome}}>
      {props.children}
    </UserContext.Provider>
  );
}