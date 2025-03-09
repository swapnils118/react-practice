import { useFormik } from "formik";
import React from "react";
import basicSchema from "../schema/basicSchema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function Basic() {
  const {
    values,
    touched,
    errors,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "show-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age ? "show-error" : ""}
      />
      {errors.age && touched.age && <p>{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password ? "show-error" : ""}
      />
      {errors.password && touched.password && <p>{errors.password}</p>}

      <label htmlFor="confirmPassoword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        className={errors.confirmPassword ? "show-error" : ""}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p>{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}
