const BootstrapToast = (props) => {
  const { setShowToast } = props;
  const closeToast = () => {
    setShowToast(false);
  };
  const { title, comment, body, idx } = props.message || {};
  return (
    <div
      className="fixed top-5 right-5 bg-white shadow-lg rounded-lg max-w-sm"
      style={{ zIndex: 11 }}
      key={idx}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <strong className="mr-auto">{title}</strong>
        <small className="text-gray-500">{comment}</small>
        <button className="ml-2 text-gray-500" onClick={closeToast}>
          &times;
        </button>
      </div>
      <div className="p-4">{body}</div>
    </div>
  );
};

export default BootstrapToast;

