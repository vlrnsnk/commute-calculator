import type { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  min?: number;
  max?: number;
};

const Input = ({
  name,
  value,
  onChange,
  min,
  max,
  ...rest
}: InputProps): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;

    // Allow empty string (to support backspacing)
    if (val === '') {
      onChange?.(e);

      return;
    }

    // Allow only digits
    if (/^\d+$/.test(val)) {
      // Convert to number for range check
      const num = Number(val);

      if ((min !== undefined && num < min) || (max !== undefined && num > max)) {
        return;
      }

      onChange?.(e);
    }
  }

  return (
    <input
      type='text'
      name={name}
      // value={value === 0 ? '' : value}
      value={value}
      onChange={handleChange}
      className='border rounded px-2 py-1 bg-gray-50 dark:bg-blue-900 dark:text-blue-100'
      {...rest}
    />
  );
};

export { Input };
