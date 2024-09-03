import React, { useState } from "react";

function ProductNarbar({ isOpen, title, content, onToggle }) {
  const lang = localStorage.getItem("i18nextLng") || "th";

  return (
    <div className="text-brown1 border-b-2 py-6">
      <h3
        onClick={onToggle}
        className={`cursor-pointer font-bold ${
          isOpen &&
          "transition origin-left  ease-in-out duration-300  scale-125"
        } `}
      >
        {title}
      </h3>
      {isOpen && (
        <h4 className={`mt-4 line-clamp-3 cursor-pointer font-light`}>
          {content}
        </h4>
      )}
    </div>
  );
}

export default ProductNarbar;
