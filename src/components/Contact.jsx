import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from './CustomTextInput';
import CustomTextArea from './CustomTextArea';
import LocationSection from './LocationSection';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string()
    .email('Please use a valid email address')
    .required("Can't be empty"),
  phone: Yup.string(),
  message: Yup.string().required("Can't be empty"),
});

const Contact = () => {
  return (
    <main className='container page-wrapper'>
      <section className='contact-form-section br-15'>
        <div className='contact-info d-flex flex-col'>
          <h1 className='heading heading-one text-light medium capitalize'>
            contact us
          </h1>
          <p className='body-text text-light '>
            Ready to take it to the next level? Let&apos;s talk about your
            project or idea and find out how we can help your business grow. If
            you are looking for unique digital experiences that&apos;s relatable
            to your users, drop us a line.
          </p>
        </div>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm, validateForm }) => {
            validateForm().then((errors) => {
              if (Object.keys(errors).length === 0) {
                alert('Thank you for the message. We will contact you soon');
                resetForm();
              }
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className='form d-flex flex-col'>
              <CustomTextInput type='text' name='name' placeholder='Name' />

              <CustomTextInput
                type='email'
                name='email'
                placeholder='Email Address'
              />

              <CustomTextInput type='text' name='phone' placeholder='Phone' />

              <CustomTextArea
                as='textarea'
                name='message'
                placeholder='Your Message'
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn-submit btn-dark medium uppercase'
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
      <LocationSection />
    </main>
  );
};

export default Contact;
