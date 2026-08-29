import CustomCard from "@/components/ui/CustomCard/CustomCard";
import React, { useState } from "react";
import styles from "./ConversationsList.module.scss";
import { formatConversationTime } from "@/helpers/dateTimeHelper";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { MessageSquarePlus } from "lucide-react";

const Conversations = ({
  conversations,
  currentConversationIndex,
  setCurrentConversationIndex,
}) => {
  return (
    <div className={styles.Conversations}>
      <CustomCard
        head="Conversations"
        
        rightElement={<CustomButton variant="outline"
        rightIcon={<MessageSquarePlus/>}
        >New Chat</CustomButton>}
      >
        <div className={styles.conversationsList}>
          {conversations.map((convoItem, cIdx) => {
            return (
              <div
                className={`${styles.convoItem} ${cIdx === currentConversationIndex ? styles.active : ""}`}
                key={convoItem.id}
                role="button"
                onClick={() => {
                  setCurrentConversationIndex(cIdx);
                }}
              >
                <p>{convoItem.latestMessage.message}</p>
                <small>
                  {formatConversationTime(convoItem.latestMessage.time)}
                </small>
              </div>
            );
          })}
        </div>
      </CustomCard>
    </div>
  );
};

export default Conversations;
