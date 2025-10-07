import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QoraChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Qora Agent. I can help you create amazing content for your digital products and events. What would you like to create today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response - replace with actual AI call
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "This is a preview of Qora Agent! Soon I'll be able to help you create product descriptions, event plans, marketing copy, and much more. Upgrade to Qora Pro to unlock full AI capabilities!",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border-2 border-[#3533cd]/20 bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3533cd] to-[#fdcb08] flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">Qora Agent</h3>
            <p className="text-xs text-muted-foreground">Your AI Creative Partner</p>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="ml-auto"
          >
            <Sparkles className="w-5 h-5 text-[#fdcb08]" />
          </motion.div>
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-[#3533cd]/10"
                        : "bg-gradient-to-br from-[#3533cd]/20 to-[#fdcb08]/20"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-[#3533cd]" />
                    ) : (
                      <Bot className="w-4 h-4 text-[#3533cd]" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-[#3533cd]/10 border border-[#3533cd]/20"
                        : "bg-muted/50 border border-border"
                    }`}
                  >
                    <p className="font-body text-sm leading-relaxed text-foreground">
                      {message.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3533cd]/20 to-[#fdcb08]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#3533cd]" />
                </div>
                <div className="bg-muted/50 border border-border rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#3533cd]" />
                    <span className="text-sm text-muted-foreground font-body">Thinking...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Qora anything..."
            className="flex-1 font-body"
            disabled={loading}
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-gradient-to-r from-[#3533cd] to-[#3533cd]/80 hover:shadow-[0_0_40px_rgba(53,51,205,0.4)] text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QoraChatbot;