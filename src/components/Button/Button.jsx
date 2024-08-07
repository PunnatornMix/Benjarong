import React from "react";

function Button({ className }) {
  const lang = localStorage.getItem("i18nextLng");
  return (
    <button
      className={`btn btn-outline rounded-3xl border-brown1 ${className}`}
    >
      <p className={`text-brown1 ${className}`}>
        {lang === "th" ? "ดูเพิ่มเติม" : "View more"}
      </p>
    </button>
  );
}

export default Button;
