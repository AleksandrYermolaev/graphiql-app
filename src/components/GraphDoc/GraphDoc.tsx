import { useEffect, useState } from 'react';
import { IntrospectionType } from 'graphql';
import apiService from 'services/apiService';
import { DocWrapper } from 'hoc/DocWrapper';
import { ObjectDoc } from './ObjectDoc';
import { InputObjectDoc } from './InputObjectDoc';
import { ScalarDoc } from './ScalarDoc';
import { Fallback } from './Fallback';
import { getInititalSchema } from 'helpers/parseSchema';

export const GraphDoc: React.FC = () => {
  const [apiSchema, setApiSchema] = useState<ReadonlyArray<IntrospectionType>>([]);
  const [viewSchemaNum, setViewSchemaNum] = useState<number>(0);
  const [navigationHistory, setNavigationHistory] = useState<Array<number>>([]);
  const viewSchema = apiSchema[viewSchemaNum];

  const handleChangeSchema = (event: React.SyntheticEvent<HTMLSpanElement, MouseEvent>): void => {
    const { textContent } = event.target as HTMLElement;
    if (textContent) {
      const originalName = textContent.replace(/[!\]\[ ]/gi, '');
      const newViewSchemaNum = apiSchema.findIndex((schema) => schema.name === originalName);
      setNavigationHistory((prevState) => [...prevState, viewSchemaNum]);
      setViewSchemaNum(newViewSchemaNum);
    }
  };

  const handleBackInHistory = (): void => {
    const lastSchema = navigationHistory.at(-1);
    if (lastSchema) {
      setViewSchemaNum(lastSchema);
    } else {
      setViewSchemaNum(getInititalSchema(apiSchema));
    }
    setNavigationHistory((prevState) => prevState.slice(0, -1));
  };

  useEffect(() => {
    (async () => {
      const schemaText = await apiService.getSchema();
      setApiSchema(schemaText);
      setViewSchemaNum(getInititalSchema(schemaText));
    })();
  }, []);

  switch (viewSchema?.kind) {
    case 'OBJECT':
      return (
        <DocWrapper
          doc={<ObjectDoc viewSchema={viewSchema} changeSchema={handleChangeSchema} />}
          setInitial={handleBackInHistory}
        />
      );
    case 'INPUT_OBJECT':
      return (
        <DocWrapper
          doc={<InputObjectDoc viewSchema={viewSchema} changeSchema={handleChangeSchema} />}
          setInitial={handleBackInHistory}
        />
      );
    case 'SCALAR':
      return (
        <DocWrapper doc={<ScalarDoc viewSchema={viewSchema} />} setInitial={handleBackInHistory} />
      );
    default:
      return <DocWrapper doc={<Fallback />} setInitial={handleBackInHistory} />;
  }
};
