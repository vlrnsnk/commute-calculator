import { useState, type ReactElement } from "react";
import "./App.css";
import CommuteForm from "./components/CommuteForm/CommuteForm";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import type { CommuteData } from "./types/common";
import { CommuteResult } from "./components/CommuteResult/CommuteResult";

const App = (): ReactElement => {
  const [commuteData, setCommuteData] = useState<CommuteData>({
    workDays: 0,
    workMiles: 0,
    schoolDays: 0,
    schoolMiles: 0,
  });

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100 text-red dark:bg-slate-800 dark:text-blue-100 text-xl">
      <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-between items-center mb-6 px-4">
          <h1 className="text-2xl font-bold text-blue-800 dark:text-sky-200">
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
  );
};

export default App;
