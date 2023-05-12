import { Fragment } from 'react';
import styles from './ScalarDoc.module.scss';
import { IntrospectionScalarType } from 'graphql';
import { getScalarDesc } from 'helpers/parseSchema';

interface ScalarDocProps {
  viewSchema: IntrospectionScalarType;
}

export const ScalarDoc: React.FC<ScalarDocProps> = ({ viewSchema }) => {
  return (
    <Fragment>
      <h3 className={styles.heading}>{viewSchema.name}</h3>
      <p
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: getScalarDesc(viewSchema) }}
      ></p>
    </Fragment>
  );
};
