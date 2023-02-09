
import { useState } from 'react';
const useFlip = () => {
  const [isFacingUp, setFacingUp] = useState(true);
  const flipCard = () => {
    setFacingUp(state => !state)
  }
  return [isFacingUp, flipCard]
}
export default useFlip;