'use client'

import { createContext, useContext, ReactNode, useEffect } from "react";
import { useGetUserInfoQuery } from "./query/auth/useAuthQuery";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/lib/slice/user";

interface AuthContextType {
  user: any;
  isFetching: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isFetching } = useGetUserInfoQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data?.user))
      dispatch(setLoading(isFetching))
    }
  }, [dispatch, isFetching])

  return (
    <AuthContext.Provider value={{ user: data?.user, isFetching }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
