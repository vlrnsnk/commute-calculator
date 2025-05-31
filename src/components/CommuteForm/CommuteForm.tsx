import { useState, type ChangeEvent, type FormEvent, type ReactElement } from 'react';
import type { CommuteData } from '../../types/common';
import { Input } from '../Input/Input';

type CommuteFormProps = {
  onCalculate: (data: CommuteData) => void;
};

const CommuteForm = ({ onCalculate }: CommuteFormProps): ReactElement => {
  const [formData, setFormData] = useState<CommuteData>({
    workDays: 0,
    workMiles: 0,
    schoolDays: 0,
    schoolMiles: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value) >= 0 ? Number(value) : 0,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-4 text-geico-blue dark:text-geico-lightblue'>
          Vehicle Usage - Work/School Combination
        </h2>

        <div className='grid grid-cols-3 gap-4 mb-6'>
          <div className='font-semibold'>Category</div>
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

        <button
          type='submit'
          className='bg-geico-blue hover:bg-geico-darkblue text-white px-4 py-2 rounded transition-colors cursor-pointer'
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default CommuteForm;
