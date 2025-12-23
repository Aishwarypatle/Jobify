'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { useGetUserInfoQuery } from "./query/auth/useAuthQuery";

interface AuthContextType {
  user: any;
  isFetching: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data , isFetching } = useGetUserInfoQuery()
  return (
    <AuthContext.Provider value={{ user: data, isFetching }}>
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
