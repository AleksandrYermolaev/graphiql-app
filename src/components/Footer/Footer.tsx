import classes from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <a className={classes.link} href="https://github.com/AleksandrYermolaev">
        <img src="/logo_github.svg" alt="github" />
        <p className={classes.username}>AleksandrYermolaev</p>
      </a>
      <a className={classes.link} href="https://github.com/esmolina">
        <img src="/logo_github.svg" alt="github" />
        <p className={classes.username}>Esmolina</p>
      </a>
      <a className={classes.link} href="https://github.com/Arzhanik-Anastasia">
        <img src="/logo_github.svg" alt="github" />
        <p className={classes.username}>Arzhanik-Anastasia</p>
      </a>
      <p className={classes.year}>2023</p>
      <a className={classes.link} href="https://rs.school/">
        <img src="/logo_rsschool.svg" alt="rsschool" height={20} />
      </a>
    </footer>
  );
};
