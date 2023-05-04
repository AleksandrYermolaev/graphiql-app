import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';
import { authors } from 'data/authors';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        {authors.map((author) => (
          <Link key={author.name} to={author.gitHubLink} className={classes.link}>
            <li className={classes['list-item']}>
              <img src="/logo_github.svg" alt="github" />
              <p className={classes.username}>{author.name}</p>
            </li>
          </Link>
        ))}
        <p className={classes.year}>2023</p>
        <Link className={classes.link} to="https://rs.school/">
          <img src="/logo_rsschool.svg" alt="rsschool" height={20} />
        </Link>
      </ul>
    </footer>
  );
};
