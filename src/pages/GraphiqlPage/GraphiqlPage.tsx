import { useState, useEffect } from 'react';
import { IntrospectionType } from 'graphql';
import styles from './GraphiqlPage.module.scss';
import apiService from 'services/apiService';
import { ObjectDoc } from 'components/GraphDoc/ObjectDoc';
import { ScalarDoc } from 'components/GraphDoc/ScalarDoc';

export const GraphiqlPage: React.FC = () => {
  const [apiSchema, setApiSchema] = useState<ReadonlyArray<IntrospectionType>>([]);
  const [viewSchemaNum] = useState<number>(2);
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
        <ScalarDoc viewSchema={viewSchema} />
      </section>
    );
  }
  return null;
};
