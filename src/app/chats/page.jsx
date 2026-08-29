import ProtectedRoute from "@/components/layout/ProtectedRoute/ProtectedRoute";
import ChatsScreen from "@/components/screens/Chats/Chats";
import React from "react";

const ChatsPage = () => {
  return (
    <ProtectedRoute>
      <ChatsScreen />
    </ProtectedRoute>
  );
};

export default ChatsPage;
