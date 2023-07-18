"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Meu chat | OpenAI</CardTitle>
        <CardDescription>
          Chatbot integrado com chatGPT 3.5 turbo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3 mt-3">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/28718657?v=4" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>CB</AvatarFallback>
                  <AvatarImage src="https://thumbs.dreamstime.com/z/futuristic-digital-chatbot-grey-background-d-rendering-108970139.jpg?w=768" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "Chat Robot"}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full space-x-2 pt-1" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
