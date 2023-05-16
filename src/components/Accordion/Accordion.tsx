import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Accordion.module.scss';
import { Button } from '../Button';
import { FormattedMessage } from 'react-intl';
import { ChevronDown, ChevronUp } from 'react-feather';

const cx = classNames.bind(styles);

export const Accordion: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showVariables, setShowVariables] = useState(true);
  const [showHeaders, setShowHeaders] = useState(false);

  const buttonVarStyle =
    showVariables && !showContent ? 'button__accordion-active' : 'button__accordion-inactive';
  const buttonHeadersStyle =
    showHeaders && !showContent ? 'button__accordion-active' : 'button__accordion-inactive';

  function toggleAccordion() {
    setShowContent(!showContent);
  }

  function toggleShowVariables() {
    setShowVariables(true);
    setShowHeaders(false);
  }

  function toggleShowHeaders() {
    setShowVariables(false);
    setShowHeaders(true);
  }

  return (
    <div className={cx('accordion__wrapper')}>
      <div className={cx('accordion__title', { 'border-bottom': !showContent })}>
        <div className={cx('accordion__buttons')}>
          <Button
            type="button"
            styles={buttonVarStyle}
            include={<FormattedMessage id={'variables'} />}
            onClick={toggleShowVariables}
          />
          <Button
            type="button"
            styles={buttonHeadersStyle}
            include={<FormattedMessage id={'headers'} />}
            onClick={toggleShowHeaders}
          />
        </div>
        {showContent && <ChevronDown color={'#eee6cc'} onClick={toggleAccordion} />}
        {!showContent && <ChevronUp color={'#eee6cc'} onClick={toggleAccordion} />}
      </div>
      {!showContent && showVariables && (
        <div className={cx('accordion__content')}>show variables</div>
      )}
      {!showContent && showHeaders && <div className={cx('accordion__content')}>show headers</div>}
    </div>
  );
};
