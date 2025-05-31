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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="font-semibold"></div>
        <div className="font-semibold">Days</div>
        <div className="font-semibold">Miles each way</div>

        <div>Enter in SNAP:</div>
        <div>{totalDays}</div>
        <div>{Math.round(averageMiles)}</div>
      </div>

      <div className="mt-4 p-4 bg-geico-green bg-opacity-20 rounded">
        <p className="font-semibold">Total Weekly Commute:</p>
        <p>{totalMiles} miles ({totalDays} days)</p>
      </div>
    </div>
  );
};

export { CommuteResult };
