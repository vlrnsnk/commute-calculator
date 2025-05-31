import { useState, type ReactElement } from 'react';
import './App.css';
import CommuteForm from './components/CommuteForm/CommuteForm';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import type { CommuteData } from './types/common';
import { CommuteResult } from './components/CommuteResult/CommuteResult';

const App = (): ReactElement => {
  const [commuteData, setCommuteData] = useState<CommuteData>({
    workDays: 0,
    workMiles: 0,
    schoolDays: 0,
    schoolMiles: 0,
  });

  return (
    <div className='min-h-screen p-4 md:p-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-geico-blue dark:text-geico-lightblue'>
            Commute Calculator
          </h1>
          <ThemeSwitcher />
        </div>
        <CommuteForm onInputChange={(data) => setCommuteData(data)} />
        <CommuteResult
          workDays={commuteData.workDays}
          workMiles={commuteData.workMiles}
          schoolDays={commuteData.schoolDays}
          schoolMiles={commuteData.schoolMiles}
        />
      </div>
    </div>
  )
}

export default App;
