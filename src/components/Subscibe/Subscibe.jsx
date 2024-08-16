import React, { useState } from "react";
import { toast } from "react-toastify";

function Subscibe() {
  const lang = localStorage.getItem("i18nextLng");

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const validateEmail = (email) => {
    // Regular Expression สำหรับตรวจสอบรูปแบบ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    // อัพเดตสถานะของการตรวจสอบ
    setIsValid(validateEmail(inputEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
    if (validateEmail(email)) {
      setSubmittedEmail(email); // อัพเดต email ที่ส่งแล้ว
      toast.success("Email ได้รับการส่งเรียบร้อยแล้ว!");
    } else {
      setIsValid(false); // กรณีที่ email ไม่ถูกต้อง
      toast.error("email ไม่ถูกต้อง");
    }
  };

  return (
    <section className="h-[300px] bg-Lbrown1">
      <div className="container mx-auto h-full flex items-center">
        <div className="w-[40%] flex flex-col items-center gap-3 mx-auto text-center">
          <h1>
            {lang === "th"
              ? "สมัครรับจดหมายข่าวของเรา"
              : "Subscribe our newsletter"}
          </h1>
          <p>
            {lang === "th"
              ? "สมัครรับจดหมายข่าวเพื่อรับข้อมูลอัปเดตเกี่ยวกับข้อเสนอพิเศษ สินค้าใหม่ และโปรโมชั่นต่างๆ ของเรา"
              : "Subscribe to the mailing list to receive updates on special offers, new arrivals and our promotions."}
          </p>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered rounded-full bg-white flex items-center gap-2 h-14 w-full">
              <input
                id="email"
                value={email}
                onChange={handleChange}
                type="email"
                placeholder={
                  lang === "th"
                    ? "กรุณากรอกอีเมลของคุณ"
                    : "Enter your email address"
                }
                className="  w-full max-w-xs "
              />
              <button
                type="submit"
                className="badge cursor-pointer bg-brown1 hover:bg-HoverBrown ml-auto text-white py-[20px] px-5"
              >
                Subscibe
              </button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscibe;
