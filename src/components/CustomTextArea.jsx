import { useField } from 'formik';
import iconError from '../assets/contact/desktop/icon-error.svg';

const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className=' input-container d-flex align-center space-between'>
      <textarea
        rows='4'
        cols='40'
        maxLength='150'
        {...field}
        {...props}
        className='input-field body-text text-light medium'
      />
      {meta.touched && meta.error ? (
        <div className='error-icon-message d-flex align-center'>
          <span className='error-message text-light'>{meta.error}</span>
          <img src={iconError} alt='' />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CustomTextArea;
