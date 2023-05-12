import { useState, useEffect } from 'react';
import styles from './GraphiqlPage.module.scss';
import apiService from 'services/apiService';

import { IntrospectionType } from 'graphql';
import { ObjectDoc } from 'components/ObjectDoc';
import { getScalarDesc } from 'helpers/parseSchema';

export const GraphiqlPage: React.FC = () => {
  const [apiSchema, setApiSchema] = useState<ReadonlyArray<IntrospectionType>>([]);
  const [viewSchemaNum] = useState<number>(1);
  const viewSchema = apiSchema[viewSchemaNum];

  useEffect(() => {
    (async () => {
      const schemaText = await apiService.getSchema();
      setApiSchema(schemaText);
    })();
  }, []);

  console.log(apiSchema);

  if (viewSchema?.kind === 'OBJECT') {
    return (
      <section className={styles.doc}>
        <ObjectDoc viewSchema={viewSchema} />
      </section>
    );
  }
  if (viewSchema?.kind === 'SCALAR') {
    return (
      <section className={styles.doc}>
        <h3 className={styles.heading}>{viewSchema.name}</h3>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: getScalarDesc(viewSchema) }}
        ></p>
      </section>
    );
  }
  return null;
};
