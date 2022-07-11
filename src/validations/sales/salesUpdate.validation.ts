import * as yup from "yup";

const salesUpdateSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        status: yup.string().required("status is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default salesUpdateSchema;
