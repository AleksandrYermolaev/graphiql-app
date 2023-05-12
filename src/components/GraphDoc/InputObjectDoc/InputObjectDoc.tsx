import { Fragment } from 'react';
import styles from './InputObjectsDoc.module.scss';
import { IntrospectionInputObjectType, IntrospectionInputValue } from 'graphql';
import { getFieldDesc, getFieldName, getFieldType, getSchemaHeading } from 'helpers/parseSchema';

interface InputObjectDocProps {
  viewSchema: IntrospectionInputObjectType;
}

export const InputObjectDoc: React.FC<InputObjectDocProps> = ({ viewSchema }) => {
  const { heading, desc, code, field_name, type } = styles;

  return (
    <Fragment>
      <h3 className={heading}>{getSchemaHeading(viewSchema)}</h3>
      {viewSchema &&
        viewSchema.inputFields.map((field: IntrospectionInputValue, index) => (
          <Fragment key={`${field.name}-${index}`}>
            <p className={desc}>{getFieldDesc(field)}</p>
            <p className={code}>
              <span className={field_name}>{getFieldName(field)}</span>:{' '}
              <span className={type}>{getFieldType(field)}</span>
            </p>
          </Fragment>
        ))}
    </Fragment>
  );
};
