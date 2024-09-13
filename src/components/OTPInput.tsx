// components/OTPInput.tsx
import React, { useState } from "react";
import styles from "../styles/otp.module.css";

interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChangeOTP }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.slice(-1); // Limita el valor a un solo carácter
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChangeOTP(newOtp.join("")); // Llama a la función con el OTP completo
  };

  return (
    <div className={styles.otpContainer}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          className={styles.otpInput}
        />
      ))}
    </div>
  );
};

export default OTPInput;
