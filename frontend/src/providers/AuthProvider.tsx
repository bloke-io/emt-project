import { createContext, useMemo } from "react";

type LoginDetails = {
  userId: string;
  password: string;
};

type AuthContextType = {
  login: (loginDetails: LoginDetails) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const login = async (loginDetails: LoginDetails) => {
    console.log("implement login", loginDetails);
  };

  const logout = () => {
    console.log("implement logout");
  };

  const memoizedValue = useMemo(
    () => ({
      login,
      logout,
    }),
    []
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};