export interface InputProps {
  placeholder?: string;
  showIcon?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}