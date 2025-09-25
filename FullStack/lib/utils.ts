import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export function validateSignupForm(data: SignupFormData): FormErrors {
  const errors: FormErrors = {};

  // 🔤 Name Validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.length < 4 || data.name.length > 30) {
    errors.name = "Name must be between 4 and 30 characters";
  }

  // 📧 Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  // 🔒 Password Strength Validation
  const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!data.password.trim()) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
  }

  return errors;
}
