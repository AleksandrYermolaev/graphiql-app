import styles from './DocWrapper.module.scss';

interface DocWrapperProps {
  doc: JSX.Element;
}

export const DocWrapper: React.FC<DocWrapperProps> = ({ doc }) => {
  return <section className={styles.wrapper}>{doc}</section>;
};
