import * as yup from "yup";

const salesCreateSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("name is required"),
        status: yup.string().required("status is required"),
        products: yup.string().required("products are required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default salesCreateSchema;
