"use client";

export default function CustomModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white rounded-lg shadow-lg w-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold p-5">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="">{children}</div>

      </div>
    </div>
  );
}
