import React from "react";

const ResumePrompt = ({ onSelect, onClose }) => {
  return (
  
<div className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-sm w-full text-center text-white shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Which resume would you like to view?</h2>
        <div className="flex justify-around space-x-4">
          <button
            onClick={() => onSelect("hardware")}
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Hardware
          </button>
          <button
            onClick={() => onSelect("software")}
            className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-700 transition"
          >
            Software
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-400 hover:text-gray-200 underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ResumePrompt;
