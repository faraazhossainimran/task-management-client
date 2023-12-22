const ColumnTitle = ({ bg, text }) => {
    return (
      <div className={`flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white justify-content-center align-items-center`}>
        <div className="flex-grow w-0 flex items-center justify-center">
          <p className="font-bold text-lg px-4 py-2">{text}</p>
        </div>
      </div>
    );
  };
export default ColumnTitle;