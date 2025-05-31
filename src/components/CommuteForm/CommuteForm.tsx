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
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-4 text-geico-blue dark:text-geico-lightblue'>
          Vehicle Usage - Work/School Combination
        </h2>

        <div className='grid grid-cols-3 gap-4 mb-6'>
          <div className='font-semibold'></div>
          <div className='font-semibold'>Days</div>
          <div className='font-semibold'>Miles each way</div>

          <div>Work:</div>
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

          <div>School:</div>
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
