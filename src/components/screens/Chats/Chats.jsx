"use client";

import React, { useState } from "react";
import styles from "./Chats.module.scss";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import ConversationsList from "./components/ConversationsList/ConversationsList";
import Conversation from "./components/Conversation/Conversation";

export default function ChatsScreen() {
  const conversations = [
    {
      id: "con11",
      latestMessage: {
        time: "2026-08-27T22:30:00",
        message:
          "Can you explain how server-side rendering works in Next.js and when I should use it instead of client-side rendering?",
      },
      active: true,
    },
    {
      id: "con22",
      latestMessage: {
        time: "2026-08-27T21:45:00",
        message:
          "What are the best practices for implementing authentication and authorization in a Next.js application with a Node.js backend?",
      },
    },
    {
      id: "con21",
      latestMessage: {
        time: "2026-08-26T20:20:00",
        message:
          "Can you explain the key differences between SSR, SSG, ISR, and CSR in Next.js with practical examples?",
      },
    },
    {
      id: "con26",
      latestMessage: {
        time: "2026-08-26T19:05:00",
        message:
          "How can I improve the performance of a Next.js application that has a large number of pages and frequently changing data?",
      },
    },
    {
      id: "con27",
      latestMessage: {
        time: "2026-08-25T18:30:00",
        message:
          "How does Next.js middleware work, and how can I use it to protect routes and handle user authentication?",
      },
    },
    {
      id: "con28",
      latestMessage: {
        time: "2026-08-24T17:15:00",
        message:
          "What are React Server Components, how do they work in Next.js, and what are their advantages over traditional React components?",
      },
    },
    {
      id: "con29",
      latestMessage: {
        time: "2026-08-22T16:40:00",
        message:
          "What is the recommended approach for deploying a production Next.js application with environment variables, caching, and database connectivity?",
      },
    },
    {
      id: "con30",
      latestMessage: {
        time: "2026-08-20T15:25:00",
        message:
          "How should I structure a large-scale Next.js project to keep components, API routes, services, and utilities maintainable?",
      },
    },
    {
      id: "con31",
      latestMessage: {
        time: "2026-08-18T11:10:00",
        message:
          "Can you explain how caching works in Next.js and the different strategies available for improving application performance?",
      },
    },
  ];


  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);

  const currentConversation = conversations[currentConversationIndex];

  return (
    <>
      <PageLayout>
        <div className={styles.ChatsScreen}>
          <ConversationsList
            conversations={conversations}
            setCurrentConversationIndex={setCurrentConversationIndex}
            currentConversationIndex={currentConversationIndex}
          />
          <Conversation
            currentConversation={currentConversation}
            currentConversationIndex={currentConversationIndex}
            key={currentConversationIndex}
            
          />
        </div>
      </PageLayout>
    </>
  );
}
