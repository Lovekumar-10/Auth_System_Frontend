import React from "react";
import { X } from "lucide-react";

const ConfirmActionModal = ({ 
  show, 
  onClose, 
  onConfirm, 
  title, 
  description, 
  confirmText = "Yes, Proceed" 
}) => {
  if (!show) return null;

  // Handle clicking on the backdrop to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#290024]/40 backdrop-blur-md p-4 transition-all"
      onClick={handleBackdropClick}
    >
      <div 
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-300 border border-[#ffc4fe]/30"
      >
        {/* Header with Close Icon */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-[#290024] tracking-tight">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#ffc4fe]/20 text-[#7a7a7a] hover:text-[#290024] transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <p className="text-[#7a7a7a] leading-relaxed font-medium">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="order-2 sm:order-1 flex-1 sm:flex-none rounded-xl border border-gray-100 bg-white px-6 py-3 text-sm font-bold text-[#7a7a7a] hover:bg-gray-50 hover:text-[#290024] transition-all cursor-pointer"
          >
            Go Back
          </button>

          <button
            onClick={onConfirm}
            className={`order-1 sm:order-2 flex-1 sm:flex-none rounded-xl px-6 py-3 text-sm font-bold text-white transition-all cursor-pointer shadow-lg active:scale-95
              ${title.toLowerCase().includes('delete') 
                ? 'bg-[#ef4444] hover:bg-[#b91c1c] shadow-red-200' 
                : 'bg-[#290024] hover:bg-[#4a0041] shadow-purple-200'}
            `}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionModal;