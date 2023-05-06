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
    wp1: `Send a GraphQL query to your API and get exactly what you need, nothing more and nothing
            less.`,
    wp2: `GraphQL is designed to make APIs fast, flexible, and developer-friendly.`,
    wp3: `GraphQL isn't tied to any specific database or storage engine and is instead backed by
            your existing code and data.`,
    wp4: `This application was created by students of the RSSchool, using GraphQl and for learning GraphQL..`,
    wp_heading1: `query language`,
    wp_heading2: `for APIs`,
    hover_for_response: `Hover me to see API's response...`,
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
    wp1: `Отправьте запрос к вашему API с помощью GraphQL и получите ответ - именно то, что вам нужно, ничего больше и ничего
меньше.`,
    wp2: `GraphQL разработан для того, чтобы сделать API быстрыми, гибкими и удобными для разработчиков.`,
    wp3: `GraphQL не привязан к какой-либо конкретной базе данных или механизму хранения данных и вместо этого интегрируется в ваш код и в те данные, которые вы используете.`,
    wp4: `Это приложение было создано студентами RSSchool, с использованием GraphQl и для изучения GraphQl.`,
    wp_heading1: `язык запросов`,
    wp_heading2: `для APIs`,
    hover_for_response: `Наведи курсор чтобы увидеть ответ API...`,
  },
};
