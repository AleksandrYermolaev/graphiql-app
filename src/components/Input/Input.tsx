import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import classes from './Input.module.scss';

type IProps = {
  register: UseFormRegisterReturn;
  nameInput: string;
  placeholder: string;
  type: string;
  errors?: FieldErrors<FieldValues>;
};

export const Input = ({ register, nameInput, placeholder, type, errors }: IProps) => {
  return (
    <label htmlFor={nameInput}>
      <input className={classes.input} type={type} {...register} placeholder={placeholder} />
      <span className={classes.error}>
        {errors?.[nameInput]?.message?.toString()}
        {errors?.[nameInput]?.type === 'validate' && 'Passwords do not match'}
      </span>
    </label>
  );
};
