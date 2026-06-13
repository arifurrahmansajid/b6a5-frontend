"use client";

import { deleteMessage, getConversation, updateMessage } from "@/actions/message.action";
import { ErrorMessage } from "@/components/shared/error-message";
import { DataTableRowDeleteAction } from "@/components/shared/table/data-table-row-delete-action";
import {
  TypographyMuted,
  TypographySmall,
} from "@/components/shared/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QUERY_KEY } from "@/constants/query.const";
import { useFetch } from "@/hooks/use-fetch";
import { getInitials } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { Check, Pencil, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  requestId: string;
  participantId: string;
  currentUserId: string;
};

export default function MessageConversation({
  requestId,
  participantId,
  currentUserId,
}: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);

  const { data, isLoading, isError, error } = useFetch({
    queryKey: [QUERY_KEY.MESSAGE.MY_CONVERSATION, requestId, participantId],
    queryFn: () => getConversation(requestId, participantId),
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data?.data]);

  const startEdit = (id: string, currentContent: string) => {
    setEditingId(id);
    setEditText(currentContent);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = async (id: string) => {
    if (!editText.trim()) return;
    setSaving(true);
    await updateMessage(id, { message: editText.trim() });
    setSaving(false);
    setEditingId(null);
    setEditText("");
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.MESSAGE.MY_CONVERSATION, requestId, participantId],
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(7)].map((_, i) => (
          <Skeleton key={i} className="h-7 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (isError || !data?.success) {
    return (
      <ErrorMessage
        message={data?.message ?? error?.message}
        className="ring-0"
      />
    );
  }

  if (!data.data || data.data.length === 0) {
    return (
      <TypographyMuted className="mt-5 text-center">
        No messages yet.
      </TypographyMuted>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {data.data.map((msg) => {
        const sender = msg.sender;
        const isSender = msg.senderId === currentUserId;
        const msgText = msg.content ?? msg.message;
        const isEditing = editingId === msg.id;

        return (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              isSender ? "justify-end" : "justify-start"
            }`}
          >
            {!isSender && (
              <Avatar size="sm">
                <AvatarImage src={sender.avatarUrl ?? ""} alt={sender.name} />
                <AvatarFallback>{getInitials(sender.name)}</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`flex flex-col max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ${
                isSender ? "items-end" : "items-start"
              }`}
            >
              {isEditing ? (
                <div className="flex flex-col gap-1 w-full">
                  <Textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="text-sm min-h-[60px]"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") cancelEdit();
                    }}
                    autoFocus
                  />
                  <div className="flex gap-1 justify-end">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6"
                      onClick={cancelEdit}
                      disabled={saving}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => saveEdit(msg.id)}
                      disabled={saving}
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  {isSender && (
                    <>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-5 w-5 text-muted-foreground hover:text-foreground"
                        onClick={() => startEdit(msg.id, msgText ?? "")}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <DataTableRowDeleteAction
                        className="px-2 h-5"
                        showIcon={false}
                        showSeparator={false}
                        id={msg.id}
                        label={msgText}
                        queryKey={QUERY_KEY.MESSAGE.MY_CONVERSATION}
                        deleteFun={deleteMessage}
                      />
                    </>
                  )}
                  <Badge
                    variant={isSender ? "default" : "secondary"}
                    className="whitespace-pre-wrap h-auto"
                  >
                    {msgText}
                  </Badge>
                </div>
              )}
              <div className="flex items-center gap-2 mt-1">
                <TypographyMuted className="text-xs">
                  {isSender ? "You" : sender.name}
                </TypographyMuted>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TypographySmall className="text-xs text-muted-foreground cursor-default">
                      {format(new Date(msg.createdAt), "PP")}
                    </TypographySmall>
                  </TooltipTrigger>
                  <TooltipContent>
                    {format(new Date(msg.createdAt), "PPpp")}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {isSender && (
              <Avatar size="sm">
                <AvatarImage src={sender.avatarUrl ?? ""} alt={sender.name} />
                <AvatarFallback>{getInitials(sender.name)}</AvatarFallback>
              </Avatar>
            )}
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}


