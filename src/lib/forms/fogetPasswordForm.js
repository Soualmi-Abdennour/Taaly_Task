import z from "zod";
// this schema is a based and standard not a really production schema
const FORGET_PASSWORD_SCHEMA = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email field is required." })
    .email({ message: "Not valid email." }),
});

export const FORGET_PASSWORD_FORM = {
  buttonText: "Reset Password",
  formFields: [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Example@mail.com",
      label: "Email",
    },
  ],
  validationSchema: FORGET_PASSWORD_SCHEMA,
  onSubmit: async (data, login) => {},
};
