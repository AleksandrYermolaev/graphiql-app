import { LOCALES} from '../IntlLocale/locales.tsx';

export const getInitialLocale = () => localStorage.getItem('locale') ?? LOCALES.ENGLISH;