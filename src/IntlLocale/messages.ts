import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    logIn: 'Log in',
    logOut: 'Log out',
    signUp: 'Sign up',
    successRegister: 'User registered successfully',
    allreadyRegister: 'If you are already registered - click ',
    here: 'here',
    placeholderEmail: 'Email',
    placeholderPassword: 'Password',
    requered: 'Requered',
    userExist: 'User with this email exist',
    userNotExist: 'User with this email not exist',
    userAuth: 'User authorisation successfully',
    invalidEmail: 'Invalid email address',
    inValidPassword:
      'Must be contain minimum 8 symbols, at least one letter, one digit, one special character. First letter',
    notRegister: 'Have no account yet? ',
    incorrectPassword: 'Incorrect password, try again',
    notFoundMsg: `Oh no, looks like you've wandered in the wrong place!`,
    backToHome: 'Back to home',
  },

  [LOCALES.RUSSIAN]: {
    logIn: 'Войти',
    logOut: 'Выйти',
    signUp: 'Регистрация',
    successRegister: 'Пользователь успешно зарегистрирован',
    allreadyRegister: 'Если вы уже зарегистрированы - нажмите ',
    here: 'здесь',
    placeholderEmail: 'Электронная почта',
    placeholderPassword: 'Пароль',
    requered: 'Обязательное поле',
    userExist: 'Пользователь с такой электронной почтой уже зарегистрирован',
    userNotExist: 'Пользователь с такой электронной почтой не зарегистрирован',
    userAuth: 'Пользователь успешно авторизован',
    invalidEmail: 'Неправильный формат',
    inValidPassword:
      'Должен содержать минимум 8 символов, 1 буква, 1 цифра и 1 специальный символ. Первая буква',
    notRegister: 'Еще не зарегистрированы? ',
    incorrectPassword: 'Неправильный пароль, попробуйте еще раз',
    notFoundMsg: 'Упс, похоже вы свернули не туда!',
    backToHome: 'Вернуться домой',
  },
};
