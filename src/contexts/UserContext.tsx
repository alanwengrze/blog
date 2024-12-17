import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "@/lib/api";
interface User {
  name: string;
  bio: string;
  email: string;
  avatar_url: string;
  html_url: string;
}

interface UserContextType {
  user: User;
  getUser: () => Promise<void>;
}

interface UserProviderType {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User>({} as User);

  async function getUser() {
    const response = await fetchUser.get("/users/alanwengrze", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    setUser(response.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider 
      value={{ 
        user,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  return context
}