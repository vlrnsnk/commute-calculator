import type { ChangeEvent, ReactElement } from 'react';

type InputProps = {
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
};

const Input = ({
  name,
  value,
  onChange,
  min,
  max,
}: InputProps): ReactElement => {
  return (
    <input
      type='number'
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className='border rounded px-2 py-1 dark:bg-gray-700'
    />
  );
};

export { Input };
