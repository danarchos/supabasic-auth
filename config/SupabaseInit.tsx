import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "./extras";
import React, { FC } from "react";
import { SupabaseContextProvider } from "use-supabase";

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    localStorage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
  }
);

export const SupabaseWrapper: FC = ({ children }) => (
  <SupabaseContextProvider client={supabase}>
    {children}
  </SupabaseContextProvider>
);
