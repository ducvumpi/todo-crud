interface TodoItem {
  text: string;
  onDelete: () => void;
}
export default function Todoprops({ text, onDelete }: TodoItem) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg fade-in">
      <div className="flex items-center">
        <button
          className="task-toggle mr-3 text-gray-400 hover:text-indigo-600 transition-colors"
          data-id="1760603616866"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-circle w-5 h-5"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </button>
        <span className="">{text}</span>
      </div>
      <button
        onClick={onDelete}
        className="task-delete text-gray-400 hover:text-red-500 transition-colors"
        data-id="1760603616866"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-trash-2 w-5 h-5"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
}
