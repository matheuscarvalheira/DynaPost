import { Post } from "@/contexts/backend-context/types";

export interface PostProps {
  className?: string;
  onClick?: () => void;
  isOnModal?: boolean;
  userType: string;
  currentPost?: Post;
}