import React, { useState } from "react";

function ProductNarbar({ isOpen, title, content, onToggle }) {
  const lang = localStorage.getItem("i18nextLng") || "th";

  return (
    <div className="text-brown1 border-b-2 py-6">
      <h2
        onClick={onToggle}
        className={`cursor-pointer ${
          isOpen &&
          "transition origin-left  ease-in-out duration-300  scale-125"
        } `}
      >
        {title}
      </h2>
      {isOpen && (
        <h3 className={`mt-4 line-clamp-3 cursor-pointer font-light`}>
          {content}
        </h3>
      )}
    </div>
  );
}

export default ProductNarbar;
