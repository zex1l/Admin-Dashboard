import { ChangeEvent } from 'react';

const Input = ({ placeholder, onChange, value }: Props) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;

type Props = {
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
