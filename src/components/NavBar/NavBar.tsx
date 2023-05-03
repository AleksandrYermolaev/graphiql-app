import classNames from "classnames/bind";
import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

export interface NavLinkInterface {
  title: string;
  link: string;
  id: number;
}

export const navigations: Array<NavLinkInterface> = [
  {
    title: 'Start',
    link: '#!',
    id: 1,
  },
  {
    title: 'GraphiQL',
    link: '/app',
    id: 2,
  },
];

const NavBar = () => {
  return (
    <div className={cx('header__nav-bar-wrapper')}>
      <ul className={cx('header__nav-bar')}>
        {navigations.map((linkInfo: NavLinkInterface) => (
          <li key={`header-${linkInfo.id}`} className={cx('header__nav-item')}> {linkInfo.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;