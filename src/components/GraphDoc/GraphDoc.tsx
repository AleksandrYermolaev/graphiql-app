import { useEffect, useState } from 'react';
import { IntrospectionType } from 'graphql';
import apiService from 'services/apiService';
import { DocWrapper } from 'hoc/DocWrapper';
import { ObjectDoc } from './ObjectDoc';
import { InputObjectDoc } from './InputObjectDoc';
import { ScalarDoc } from './ScalarDoc';
import { Fallback } from './Fallback';

export const GraphDoc: React.FC = () => {
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

  switch (viewSchema?.kind) {
    case 'OBJECT':
      return <DocWrapper doc={<ObjectDoc viewSchema={viewSchema} />} />;
    case 'INPUT_OBJECT':
      return <DocWrapper doc={<InputObjectDoc viewSchema={viewSchema} />} />;
    case 'SCALAR':
      return <DocWrapper doc={<ScalarDoc viewSchema={viewSchema} />} />;
    default:
      return <DocWrapper doc={<Fallback />} />;
  }
};
