"use client";

import React, { useState } from "react";
import styles from "./Auth.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import { signIn, signUp } from "@/services/auth.service";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Image } from "react-bootstrap";

const AuthScreen = () => {
  const [values, setValues] = useState({
    email: "yora8807+1@gmail.com",
    password: "test123",
    confirmPassword: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (isLogin) {
        const res = await signIn(values);
      } else {
        const res = await signUp(values);
      }
    } catch (error) {
      console.log(error.message);

      if (error.message === "User already registered") {
        await signIn(values);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__card}>
        <div className={styles.auth__header}>
          <Image src={"/logo/logo_h.png"} width={180} alt="logo" />
          <br />

          <p>Sign in to continue to your account</p>
        </div>

        <form
          className={styles.auth__form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles.auth__field}>
            <label htmlFor="email">Email</label>
            <CustomInput
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(v) => {
                setValues((prev) => ({
                  ...prev,
                  email: v,
                }));
              }}
              disabled={loading}
              value={values.email}
            />
          </div>

          <div className={styles.auth__field}>
            <label htmlFor="password">Password</label>
            <CustomInput
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(v) => {
                setValues((prev) => ({
                  ...prev,
                  password: v,
                }));
              }}
              disabled={loading}
              value={values.password}
            />
          </div>

          {!isLogin && (
            <div className={styles.auth__field}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <CustomInput
                id="confirmPassword"
                type="password"
                placeholder="Enter your password again"
                onChange={(v) => {
                  setValues((prev) => ({
                    ...prev,
                    confirmPassword: v,
                  }));
                }}
                disabled={loading}
                value={values.confirmPassword}
              />
            </div>
          )}

          {/* <div className={styles.auth__options}>
            <label>
              <input type="checkbox" disabled={loading} />
              <span>Remember me</span>
            </label>

            <a href="/forgot-password">Forgot password?</a>
          </div> */}

          <CustomButton loading={loading} type="submit">
            {isLogin ? "Sign In" : "Register"}
          </CustomButton>
        </form>

        <div className={styles.auth__footer}>
          <span>
            {isLogin ? <>Don&apos;t </> : "Already "}
            have an account?
          </span>
          <a
            href="#"
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
          >
            {isLogin ? "Create account" : "Sign In"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
