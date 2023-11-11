import { useField } from 'formik';
import iconError from '../assets/contact/desktop/icon-error.svg';

const CustomTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className=' input-container d-flex align-center space-between'>
      <input
        {...field}
        {...props}
        className='input-field body-text text-clr-white medium'
      />
      {meta.touched && meta.error ? (
        <div className='error-icon-message d-flex align-center'>
          <span className='error-message text-clr-white'>{meta.error}</span>
          <img src={iconError} alt='' />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CustomTextInput;
