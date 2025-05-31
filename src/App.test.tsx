import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Commute Calculator', () => {
  test('Case 1: Work 4 days, 12 miles | School 3 days, 7 miles', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText(/workDays/i));
    await userEvent.type(screen.getByLabelText(/workDays/i), '4');

    await userEvent.clear(screen.getByLabelText(/workMiles/i));
    await userEvent.type(screen.getByLabelText(/workMiles/i), '12');

    await userEvent.clear(screen.getByLabelText(/schoolDays/i));
    await userEvent.type(screen.getByLabelText(/schoolDays/i), '3');

    await userEvent.clear(screen.getByLabelText(/schoolMiles/i));
    await userEvent.type(screen.getByLabelText(/schoolMiles/i), '7');

    expect(screen.getByText('4')).toBeInTheDocument(); // Total Days
    expect(screen.getByText('17')).toBeInTheDocument(); // Average Miles
  });

  test('Case 2: Work 5 days, 9 miles | School 0 days, 0 miles', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText(/workDays/i));
    await userEvent.type(screen.getByLabelText(/workDays/i), '5');

    await userEvent.clear(screen.getByLabelText(/workMiles/i));
    await userEvent.type(screen.getByLabelText(/workMiles/i), '9');

    await userEvent.clear(screen.getByLabelText(/schoolDays/i));
    await userEvent.type(screen.getByLabelText(/schoolDays/i), '0');

    await userEvent.clear(screen.getByLabelText(/schoolMiles/i));
    await userEvent.type(screen.getByLabelText(/schoolMiles/i), '0');

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
  });

  test('Case 3: Work 2 days, 9 miles | School 3 days, 4 miles', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText(/workDays/i));
    await userEvent.type(screen.getByLabelText(/workDays/i), '2');

    await userEvent.clear(screen.getByLabelText(/workMiles/i));
    await userEvent.type(screen.getByLabelText(/workMiles/i), '9');

    await userEvent.clear(screen.getByLabelText(/schoolDays/i));
    await userEvent.type(screen.getByLabelText(/schoolDays/i), '3');

    await userEvent.clear(screen.getByLabelText(/schoolMiles/i));
    await userEvent.type(screen.getByLabelText(/schoolMiles/i), '4');

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
