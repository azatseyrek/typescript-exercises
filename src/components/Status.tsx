import {Heading} from './Heading';
import Oscar from './Oscar';

type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === 'loading') {
    message = 'loading';
  } else if (props.status === 'success') {
    message = ' Data fetched succesfully';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }

  return (
    <div>
      <h2> Status : {message}</h2>
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>this is heading children text</Heading>
      </Oscar>
    </div>
  );
};

export default Status;
