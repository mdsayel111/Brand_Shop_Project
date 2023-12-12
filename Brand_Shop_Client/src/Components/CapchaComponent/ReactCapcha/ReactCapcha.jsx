import { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
} from "react-simple-captcha";

const ReactCapcha = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div>
      <LoadCanvasTemplate />
    </div>
  );
};

export default ReactCapcha;
