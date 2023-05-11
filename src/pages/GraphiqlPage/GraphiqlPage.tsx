import { useState, useEffect, Fragment } from 'react';
import styles from './GraphiqlPage.module.scss';
import apiService from 'services/apiService';
import {
  getFieldArgName,
  getFieldArgType,
  getFieldDesc,
  getFieldName,
  getFieldType,
  getSchemaHeading,
} from 'helpers/parseSchema';
import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionObjectType,
  IntrospectionType,
} from 'graphql';

export const GraphiqlPage: React.FC = () => {
  const [apiSchema, setApiSchema] = useState<ReadonlyArray<IntrospectionType>>([]);
  const [viewSchemaNum] = useState<number>(0);
  const viewSchema = apiSchema[viewSchemaNum] as IntrospectionObjectType;

  useEffect(() => {
    (async () => {
      const schemaText = await apiService.getSchema();
      setApiSchema(schemaText);
    })();
  }, []);

  console.log(apiSchema);

  const { doc, heading, desc, code, field_name, params, param_values, type } = styles;

  return (
    <section className={doc}>
      <h3 className={heading}>{getSchemaHeading(viewSchema)}</h3>
      {viewSchema &&
        viewSchema.fields.map((field: IntrospectionField, index) => (
          <Fragment key={`${field.name}-${index}`}>
            <p className={desc}>{getFieldDesc(field)}:</p>
            <p className={code}>
              <span className={field_name}>{getFieldName(field)}</span>(
              {field.args.length === 1 ? (
                <Fragment>
                  <span className={params}>{getFieldArgName(field.args[0])}</span>
                  {': '}
                  <span className={param_values}>{getFieldArgType(field.args[0])}</span>
                </Fragment>
              ) : (
                field.args.map((argument: IntrospectionInputValue, index, array) => (
                  <Fragment key={`${argument.name}-${index}`}>
                    {<br />}
                    {'  '}
                    <span className={params}>{getFieldArgName(argument)}</span>
                    {': '}
                    <span className={param_values}>{getFieldArgType(argument)}</span>
                    {index === array.length - 1 ? <br /> : ', '}
                  </Fragment>
                ))
              )}
              ): <span className={type}>{getFieldType(field)}</span>
            </p>
          </Fragment>
        ))}
    </section>
  );
};
