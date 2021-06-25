import { useParams } from 'react-router-dom';
import Theme from './Theme';

export default function EvalProcess() {
const { id } = useParams();

  return (
    <Theme id={id} />
  );
}
