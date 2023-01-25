"use client";
import React from "react";
import { useForm } from "react-hook-form";
import classes from "../register/page.module.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("dzialam");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form_container}>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Login to existing account</h1>
        <p>Required fields have an asterisk: *</p>
      </div>

      <div>
        <label className={classes.labels}>Email*</label>
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && (
          <p className={classes.error_message}>Use a valid email address</p>
        )}
      </div>
      <div>
        <label className={classes.labels}>Passowrd*</label>
        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            minLength: 6,
            maxLength: 16,
          })}
        />
        {errors.Password && (
          <p className={classes.error_message}>
            Password is too short (minimum is 6 characters).
          </p>
        )}
      </div>

      <input type="submit" value="Login" />
    </form>
  );
}
