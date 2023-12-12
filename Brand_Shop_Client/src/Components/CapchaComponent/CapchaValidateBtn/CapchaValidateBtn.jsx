/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import {
    validateCaptcha,
  } from "react-simple-captcha";

const CapchaValidateBtn = ({ setIsSubmitBtnDisable }) => {
  const doSubmit = () => {
    let user_captcha_value =
      document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha_value) == true) {
      setIsSubmitBtnDisable(false);
    } else {
      console.log("err");
      toast.error("Capcha doesn't match");
    }
  };
  return (
    <button
      type="button"
      onClick={doSubmit}
      className="px-2 py-1 rounded-2xl bg-primary text-white"
    >
      Validate
    </button>
  );
};

export default CapchaValidateBtn;
