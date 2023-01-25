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
        <h1 style={{ marginBottom: "10px" }}>Create an account</h1>
        <p>Required fields have an asterisk: *</p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "50%" }}>
          <label className={classes.labels}>First Name*</label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <p className={classes.error_message}>First name is required</p>
          )}
        </div>
        <div style={{ width: "50%" }}>
          <label className={classes.labels}>Last Name*</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <p className={classes.error_message}>Last name is required</p>
          )}
        </div>
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
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <input
          {...register("terms", { required: true })}
          type="checkbox"
          value="No"
        />
        <p>Accept terms of </p>
      </div>
      <input type="submit" value="Register" />
    </form>
  );
}
