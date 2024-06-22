export type ChatType = {
  id: number;
  name: string;
  status: string;
  typing: boolean;
  photo?: string;
  lastMessage: string;
  time: string;
  read: boolean;
  newMessages: number;
  history?: any[];
};
