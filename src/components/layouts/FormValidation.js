export const FormValidate = name => {
  const errors = [];

  if (name.length === 0) {
    errors.push(name + " can't be empty");
  }

  return errors;
};
