interface IProps {
  linkImage: string;
  toggleClose: any;
}

const ModalImage: React.FC<IProps> = ({ linkImage, toggleClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white p-6 rounded-lg ">
          <button
            className="absolute right-0 top-0 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded mb-4"
            onClick={toggleClose}
          >
            Close
          </button>
          <img
            src={linkImage}
            alt="Selected"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ModalImage;
