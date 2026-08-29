"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Conversation.module.scss";
import { formatConversationTime } from "@/helpers/dateTimeHelper";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";

const SCROLL_THRESHOLD = 100;

export default function Conversation({ currentConversation }) {
  const messagesRef = useRef(null);
  const bottomRef = useRef(null);
  const shouldAutoScroll = useRef(true);

  const [chats, setChats] = useState([
    {
      id: "msg01",
      userId: "user_001",
      role: "user",
      message:
        "Can you explain how server-side rendering works in Next.js and when I should use it instead of client-side rendering?",
      timestamp: "2026-08-27T22:30:00",
    },
    {
      id: "msg02",
      userId: "user_001",
      role: "assistant",
      message: `
      <p>Server-side rendering (SSR) means that the HTML for a page is generated on the server for each request.</p>

      <p>SSR is useful when:</p>

      <ul>
        <li>The page contains frequently changing data.</li>
        <li>You need request-specific content.</li>
        <li>SEO is important.</li>
        <li>You want meaningful HTML available before client-side JavaScript runs.</li>
      </ul>

      <p>In Next.js, server rendering can help improve the initial loading experience while keeping sensitive data-fetching logic on the server.</p>
    `,
      timestamp: "2026-08-27T22:30:08",
      sources: [
        {
          id: "src01",
          title: "Rendering: Server-side Rendering",
          url: "https://nextjs.org/docs",
        },
        {
          id: "src02",
          title: "Next.js Rendering Fundamentals",
          url: "https://nextjs.org/learn",
        },
      ],
    },
    {
      id: "msg03",
      userId: "user_001",
      role: "user",
      message:
        "So what is the main difference between SSR and static site generation?",
      timestamp: "2026-08-27T22:32:15",
    },
    {
      id: "msg04",
      userId: "user_001",
      role: "assistant",
      message: `
      <p>The main difference is <strong>when the HTML is generated</strong>.</p>

      <p>With SSR, the server generates the page for each request. With static site generation (SSG), the HTML is generated ahead of time, usually during the build process.</p>

      <p>SSG is generally faster and works well for content that does not change frequently, while SSR is better when the response needs to contain request-specific or frequently updated data.</p>
    `,
      timestamp: "2026-08-27T22:32:24",
      sources: [
        {
          id: "src03",
          title: "Next.js Rendering",
          url: "https://nextjs.org/docs/app/building-your-application/rendering",
        },
      ],
    },
    {
      id: "msg05",
      userId: "user_001",
      role: "user",
      message:
        "Can you give me a practical example of when SSR would be a better choice for an application?",
      timestamp: "2026-08-27T22:35:42",
    },
    {
      id: "msg06",
      userId: "user_001",
      role: "assistant",
      message: `
      <p>A good example is an <strong>e-commerce product page</strong> where pricing, inventory, or personalized information can change frequently.</p>

      <p>SSR allows the server to generate the latest version of the page when the user requests it. This can also provide search engines with meaningful HTML content without requiring the client to execute JavaScript first.</p>

      <h4>Example</h4>

      <pre><code>Product Page
    ↓
Server fetches latest product data
    ↓
HTML generated on server
    ↓
Browser receives rendered page
    ↓
React hydrates the page</code></pre>
    `,
      timestamp: "2026-08-27T22:35:51",
      sources: [
        {
          id: "src04",
          title: "Next.js Rendering Strategies",
          url: "https://nextjs.org/docs/app/building-your-application/rendering",
        },
        {
          id: "src05",
          title: "Next.js Data Fetching",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching",
        },
      ],
    },
  ]);

  const [message, setMessage] = useState("");
  const [showNewMessages, setShowNewMessages] = useState(false);

  const scrollToBottom = (behavior = "smooth") => {
    bottomRef.current?.scrollIntoView({
      behavior,
      block: "end",
    });

    shouldAutoScroll.current = true;
    setShowNewMessages(false);
  };

  const handleScroll = () => {
    const container = messagesRef.current;

    if (!container) return;

    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    const isNearBottom = distanceFromBottom <= SCROLL_THRESHOLD;

    shouldAutoScroll.current = isNearBottom;

    if (isNearBottom) {
      setShowNewMessages(false);
    }
  };

  useEffect(() => {
    shouldAutoScroll.current = true;

    requestAnimationFrame(() => {
      scrollToBottom("instant");
    });
  }, [currentConversation.id]);

  useEffect(() => {
    if (shouldAutoScroll.current) {
      requestAnimationFrame(() => {
        scrollToBottom("smooth");
      });
    } else {
      setShowNewMessages(true);
    }
  }, [chats]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = message.trim();

    if (!value) return;

    const newChat = {
      id: `msg_${Date.now()}`,
      userId: "user_001",
      role: "user",
      message: value,
      timestamp: new Date().toISOString(),
    };

    setChats((prevChats) => [...prevChats, newChat]);

    setMessage("");
  };

  return (
    <CustomCard
      head={formatConversationTime(currentConversation.latestMessage.time)}
      noPadding
    >
      <div className={styles.Conversation}>
        <div
          ref={messagesRef}
          className={styles.messages}
          onScroll={handleScroll}
        >
          <div className={styles.messageList}>
            {chats.map((chatItem) => {
              const isUser = chatItem.role === "user";

              return (
                <div
                  key={chatItem.id}
                  className={`${styles.chatItem} ${
                    isUser ? styles.userMessage : styles.assistantMessage
                  }`}
                >
                  {!isUser && <div className={styles.avatar}>✦</div>}

                  <div className={styles.messageWrapper}>
                    <div
                      className={styles.message}
                      dangerouslySetInnerHTML={{
                        __html: chatItem.message,
                      }}
                    />

                     <span className={styles.timestamp}>
                      {formatConversationTime(chatItem.timestamp)}
                    </span>

                    {chatItem.role === "assistant" && (
                      <div className={styles.messageActions}>
                       <Copy />
                       <ThumbsUp/>
                       <ThumbsDown/>
                      </div>
                    )}

                   
                  </div>

                  {isUser && <div className={styles.avatar}>R</div>}
                </div>
              );
            })}

            <div ref={bottomRef} className={styles.bottomAnchor} />
          </div>

          {showNewMessages && (
            <button
              type="button"
              className={styles.newMessages}
              onClick={() => scrollToBottom("smooth")}
            >
              ↓ New messages
            </button>
          )}
        </div>

        <form className={styles.messageInput} onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ask a question about this knowledge base..."
            rows={1}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
          />

          <div className={styles.inputFooter}>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!message.trim()}
            >
              ➤
            </button>
          </div>
        </form>

        <p className={styles.disclaimer}>
          AI-generated answers may not always be accurate. Please verify
          important information.
        </p>
      </div>
    </CustomCard>
  );
}
