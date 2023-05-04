import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

type IProps = {
  register: UseFormRegisterReturn;
  nameInput: string;
  placeholder: string;
  type: string;
  errors?: FieldErrors<FieldValues>;
};

const Input = ({ register, nameInput, placeholder, type, errors }: IProps) => {
  return (
    <>
      <label htmlFor={nameInput}>
        <input type={type} {...register} placeholder={placeholder} />
        <span
          className="error-span"
          /* style={{ color: 'red', display: 'inline-block', width: '70%' }} */
        >
          {errors?.[nameInput]?.message?.toString()}
          {errors?.[nameInput]?.type === 'validate' && 'Passwords do not match'}
        </span>
      </label>
    </>
  );
};

export default Input;
