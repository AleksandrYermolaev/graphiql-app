import styles from './Fallback.module.scss';

export const Fallback: React.FC = () => {
  return (
    <>
      <h3 className={styles.heading}>Oops...</h3>
      <p className={styles.desc}>
        It looks like the documentation was not ready for this type of schema.
      </p>
    </>
  );
};
