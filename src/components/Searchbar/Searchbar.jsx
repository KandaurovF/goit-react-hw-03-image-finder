import { Formik, Form, Field } from 'formik';

const Searchbar = ({ onFormSubmit }) => {
  const handleSubmit = (values, actions) => {
    onFormSubmit(values.searchInput);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ searchInput: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <button type="submit" disabled={isSubmitting} className="button">
              <span className="button-label">Search</span>
            </button>

            <Field
              name="searchInput"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default Searchbar;
