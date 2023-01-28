import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  
  // const counter = useCounter();

  return <Card>{useCounter(false)}</Card>;
};

export default BackwardCounter;
