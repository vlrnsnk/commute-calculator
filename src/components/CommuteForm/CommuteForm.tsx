import type { ReactElement } from 'react';
import type { CommuteData } from '../../types/common';

type CommuteFormProps = {
  onCalculate: (data: CommuteData) => void;
};

const CommuteForm = ({ onCalculate }: CommuteFormProps): ReactElement => {
  return <div>CommuteForm</div>;
};

export default CommuteForm;
