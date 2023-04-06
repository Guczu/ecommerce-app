import { UserData, FormErrors } from "../interfaces";

export function validateForm(data: UserData): FormErrors | null {
  const errors: FormErrors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.address) {
    errors.address = "Address is required";
  }

  if (!data.city) {
    errors.city = "City is required";
  }

  if (!data.zipcode || data.zipcode.toString().length !== 5) {
    errors.zipcode = "Wrong zipcode";
  }

  if (!data.mobile || data.mobile.toString().length !== 9) {
    errors.mobile = "Wrong mobile phone";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Wrong email";
  }

  if (Object.keys(errors).length === 0) {
    return null;
  }

  return errors;
}