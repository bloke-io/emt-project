import { createContext, useContext, useMemo } from "react";

type AuthContextType = {
  login: ({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

    const login = async ({ userId, password }: { userId: string; password: string }) => {
        console.log('implement login');
    }

    const logout = () => {
        console.log("implement logout");
    }


  const memoizedValue = useMemo(
    () => ({
      login,
      logout,
    }),
    [],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }

  return context;
};
