import api from "@/lib/axios";
import { supabase } from "@/lib/supabase";

export const signUp = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export const getProfile = async () => {
  const { data } = await api.get("/tenant-test");
  return data;
};
