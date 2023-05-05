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
    invalidEmail: 'Invalid email address',
    inValidPassword:
      'Must be contain minimum 8 symbols, at least one letter, one digit, one special character. First letter',
    notFoundMsg: `Oh no, looks like you've wandered in the wrong place!`,
    backToHome: 'Back to home',
  },

  [LOCALES.RUSSIAN]: {
    logIn: 'Вход',
    logOut: 'Выход',
    signUp: 'Регистрация',
    successRegister: 'Пользователь успешно зарегистрирован',
    allreadyRegister: 'Если вы уже зарегистрированы - нажмите ',
    here: 'здесь',
    placeholderEmail: 'Электронная почта',
    placeholderPassword: 'Пароль',
    requered: 'Обязательное поле',
    userExist: 'Пользователь с такой электронной почтой уже зарегистрирован',
    invalidEmail: 'Неправильный формат',
    inValidPassword:
      'Должен содержать минимум 8 символов, 1 буква, 1 цифра и 1 специальный символ. Первая буква',
    notFoundMsg: 'Упс, похоже вы свернули не туда!',
    backToHome: 'Вернуться домой',
  },
};
