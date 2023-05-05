import { LOCALES } from 'IntlLocale/locales';

export const getInitialLocale = () => localStorage.getItem('locale') ?? LOCALES.ENGLISH;
