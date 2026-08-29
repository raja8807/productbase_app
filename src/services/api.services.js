import { supabase } from "@/lib/supabase";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
  console.log(1);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(2);

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (session?.access_token) {
    headers.Authorization = `Bearer ${session.access_token}`;
  }

  console.log(3);

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));

    throw new Error(error.message || `Request failed: ${response.status}`);
  }

  return response.json();
};
