
const COLORS = {
  Active: 'bg-green-800 text-green-100',
  Inactive: 'bg-red-800 text-red-100'
}

const Status = ({text}:Props) => {
  return (
    <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${COLORS[text]}`}>
      {text}
    </span>
  );
};

export default Status;

type Props = {
  text: 'Active' | 'Inactive'
}