import type { ReactElement } from 'react';
import type { CommuteData } from '../../types/common';

const CommuteResult = ({
  workDays,
  workMiles,
  schoolDays,
  schoolMiles,
}: CommuteData): ReactElement => {
  const totalDays: number = Math.max(workDays, schoolDays);
  const totalMiles: number = workDays * workMiles + schoolDays * schoolMiles;
  const averageMiles: number = totalDays > 0 ? totalMiles / totalDays : 0;

  return (
    <div className="bg-gray-100 dark:bg-blue-950 p-6 rounded-lg shadow-md mt-6 text-blue-800 dark:text-sky-200">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div></div>
        <div className="font-semibold text-blue-800 dark:text-sky-200">Days</div>
        <div className="font-semibold text-blue-800 dark:text-sky-200">Miles each way</div>

        <div className="font-semibold text-gray-800 dark:text-sky-200">Enter in SNAP:</div>
        <div className="font-semibold text-gray-800 dark:text-sky-200">{totalDays}</div>
        <div className="font-semibold text-gray-800 dark:text-sky-200">{Math.round(averageMiles)}</div>
      </div>
    </div>
  );
};

export { CommuteResult };
