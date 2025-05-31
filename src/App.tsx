import { useState, type ReactElement } from 'react';
import './App.css';
import CommuteForm from './components/CommuteForm/CommuteForm';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import type { CommuteData } from './types/common';

const App = (): ReactElement => {
  const [result, setResult] = useState<CommuteData | null>(null);

  const handleCalculate = (data: CommuteData): void => {
    setResult(data);
  };

  return (
    <div className='min-h-screen p-4 md:p-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-geico-blue dark:text-geico-lightblue'>
            Commute Calculator
          </h1>
          <ThemeSwitcher />
        </div>
        <CommuteForm onCalculate={handleCalculate}/>
        {result && (<>Result</>)}
      </div>
    </div>
  )
}

export default App;
