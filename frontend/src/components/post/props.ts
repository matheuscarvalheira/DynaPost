export interface PostProps {
  className?: string;
  onClick?: () => void;
  isOnModal?: boolean;
  userType: string;
  title?: string,
  body?: string,
  createdAt?: string,
  modifiedAt?: string,
  teacherName?: string,
}