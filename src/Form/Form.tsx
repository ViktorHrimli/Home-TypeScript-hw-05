import { FC } from "react";
import { Formik, Field, Form } from "formik";
import { useSearchParams } from "react-router-dom";

const Forms: FC<{}> = () => {
  const [, setSerchParams] = useSearchParams();
  const handleSubmit = ({ query }: { query: string }, { resetForm }: any) => {
    setSerchParams({ query: query });
    resetForm();
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={{ query: "" }}>
        <Form>
          <Field type="text" name="query" />
          <button type="submit">Serch</button>
        </Form>
      </Formik>
    </>
  );
};

export { Forms };
