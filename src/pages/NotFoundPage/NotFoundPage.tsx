import { useNavigate } from 'react-router-dom';
import { Footer } from 'components/Footer';
import classes from './NotFoundPage.module.scss';
import notFoundImage from 'assets/images/error_404.png';
import { TextContent } from 'components/TextContent';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { messages } from 'IntlLocale/messages';
import { useAppSelector } from 'hooks/useAppDispatch';
import { LOCALES } from 'IntlLocale/locales';
import { Header } from 'components/Header';
import { Button } from 'components/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { locale } = useAppSelector((state) => state.localeInfo);
  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <Header />
      <main className={classes.main}>
        <div className={classes['image-container']}>
          <img className={classes.image} src={notFoundImage} alt="Not found error image" />
        </div>
        <TextContent className={classes.text}>
          <FormattedMessage id="notFoundMsg" />
        </TextContent>
        <Button
          type="button"
          styles="button__primary"
          include={<FormattedMessage id="backToHome" />}
          onClick={() => navigate('/', { replace: true })}
        />
      </main>
      <Footer />
    </IntlProvider>
  );
};
