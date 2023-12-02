import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { RoutePath, apiRoutes } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";

type LoginDetails = {
  userId: string;
  password: string;
};

type UserDetails = {
  username: string;
  email: string;
  jwt: string;
};

type AuthContextType = {
  user: UserDetails | null;
  login: (loginDetails: LoginDetails) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate(RoutePath.Login);
    }
  }, [location.pathname])

  const login = async (loginDetails: LoginDetails) => {
    const request = await axios.post(apiRoutes.login, {
      identifier: loginDetails.userId,
      password: loginDetails.password,
    });

    if (request.status === 200) {
      const jwt = request.data.jwt;
      const user = request.data.user;
      setUser({
        username: user.username,
        email: user.email,
        jwt: jwt,
      });

      return true;
    } else {
      throw new Error("Login failed- implement error handling");
    }
  };

  const logout = () => {
    setUser(null);
    navigate(RoutePath.Login);
  };

  const memoizedValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};
