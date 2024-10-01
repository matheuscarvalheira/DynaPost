export interface TextareaProps {
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}