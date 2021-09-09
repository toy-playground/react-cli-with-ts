import { useEffect } from 'react';
interface ChildProps {
  val: number;
}
const Child = (props:ChildProps) => {
  console.log('child console');
  useEffect(() => {
    console.log('effect' + props.val);
  }, [props])
  return <div>{props.val}</div>;
}
export default Child;