import { useState, type ChangeEvent, type FormEvent, type ReactElement } from 'react';
import type { CommuteData } from '../../types/common';
import { Input } from '../Input/Input';

type CommuteFormProps = {
  onInputChange: (data: CommuteData) => void;
};

const CommuteForm = ({ onInputChange }: CommuteFormProps): ReactElement => {
  const [formData, setFormData] = useState<CommuteData>({
    workDays: 0,
    workMiles: 0,
    schoolDays: 0,
    schoolMiles: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: Number(value) >= 0 ? Number(value) : 0,
    };
    setFormData(newData);
    onInputChange(newData);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='bg-gray-100 dark:bg-blue-950 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-4 text-gray-800 dark:text-sky-300 text-center pb-6'>
          Vehicle Usage - Work/School Combination
        </h2>

        <div className='grid grid-cols-3 gap-4 mb-6'>
          <div></div>
          <div className='font-semibold text-blue-800 dark:text-sky-200'>Days</div>
          <div className='font-semibold text-blue-800 dark:text-sky-200'>Miles each way</div>

          <div className="font-semibold">Work:</div>
          <Input
            name='workDays'
            value={formData.workDays}
            onChange={handleChange}
            min={0}
            max={7}
          />
          <Input
            name='workMiles'
            value={formData.workMiles}
            onChange={handleChange}
            min={0}
          />

          <div className="font-semibold">School:</div>
          <Input
            name='schoolDays'
            value={formData.schoolDays}
            onChange={handleChange}
            min={0}
            max={7}
          />
          <Input
            name='schoolMiles'
            value={formData.schoolMiles}
            onChange={handleChange}
            min={0}
          />
        </div>
      </div>
    </form>
  );
};

export default CommuteForm;
