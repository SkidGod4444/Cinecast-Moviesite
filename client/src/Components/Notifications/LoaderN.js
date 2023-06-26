import { PuffLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <PuffLoader color="#F20000" />
      </div>
    </div>
  );
}

export default Loader;
