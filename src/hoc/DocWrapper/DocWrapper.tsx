import styles from './DocWrapper.module.scss';

interface DocWrapperProps {
  doc: JSX.Element;
  setInitial: () => void;
}

export const DocWrapper: React.FC<DocWrapperProps> = ({ doc, setInitial }) => {
  const currentSchema = doc.props.viewSchema;

  return (
    <section className={styles.wrapper}>
      {currentSchema && currentSchema.name === 'Query' ? null : (
        <a href="#" className={styles.link} onClick={setInitial}>
          ← Back
        </a>
      )}
      {doc}
    </section>
  );
};
