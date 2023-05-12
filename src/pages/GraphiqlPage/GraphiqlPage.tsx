import { useState, useEffect } from 'react';
import styles from './GraphiqlPage.module.scss';
import apiService from 'services/apiService';

import { IntrospectionType } from 'graphql';
import { ObjectDoc } from 'components/ObjectDoc';

export const GraphiqlPage: React.FC = () => {
  const [apiSchema, setApiSchema] = useState<ReadonlyArray<IntrospectionType>>([]);
  const [viewSchemaNum] = useState<number>(0);
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
  return null;
};
