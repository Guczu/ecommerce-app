import { UserData, FormErrors } from "../interfaces";

export function validateForm(data: UserData): FormErrors | null {
  const errors: FormErrors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "Name is required";
  }

  if (!data.address || data.address.length < 2) {
    errors.address = "Address is required";
  }

  if (!data.city || data.city.length < 2) {
    errors.city = "City is required";
  }

  const postalCodeRegex = /^\d{2}-\d{3}$/;
  if (!data.zipcode || !postalCodeRegex.test(data.zipcode)) {
    errors.zipcode = "Wrong zipcode (00-000)";
  }

  if (!data.mobile || data.mobile.toString().length !== 9) {
    errors.mobile = "Wrong mobile phone (9 digits)";
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