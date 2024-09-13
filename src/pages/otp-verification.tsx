// pages/otp-verification.tsx
import { useState } from "react";
import OTPInput from "../components/OTPInput";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "../styles/otp.module.css"; // Ajusta la ruta según la ubicación

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState("");
  const {
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/otp", { otp });
      if (response.data.success) {
        alert("OTP validado correctamente");
      } else {
        alert("OTP incorrecto");
      }
    } catch (error) {
      console.error("Error al validar el OTP", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Verifica tu OTP</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <OTPInput length={6} onChangeOTP={setOtp} />
        {errors.otp && (
          <p className={styles.error}>Por favor ingresa un OTP válido</p>
        )}
        <button type="submit" className={styles.button}>
          Validar OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerificationPage;
