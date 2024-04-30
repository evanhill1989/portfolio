"use client";

import { Bot } from "lucide-react";
import React, { RefObject } from "react";
import AiChatBox from "./AiChatBox";
import { ContactShadows, Float, Environment } from "@react-three/drei";

interface AiChatButtonProps {
  className?: string;
}

export default function AiChatButton({ className }: AiChatButtonProps) {
  const [chatBoxOpen, setChatBoxOpen] = React.useState(false);
  return (
    <>
      <button
        className={className}
        onClick={() => setChatBoxOpen(!chatBoxOpen)}
      >
        <Bot size={24} />
      </button>

      <AiChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
