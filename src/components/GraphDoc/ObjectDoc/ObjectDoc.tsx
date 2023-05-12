import { Fragment } from 'react';
import { IntrospectionField, IntrospectionInputValue, IntrospectionObjectType } from 'graphql';
import styles from './ObjectsDoc.module.scss';
import {
  getFieldArgName,
  getFieldArgType,
  getFieldDesc,
  getFieldName,
  getFieldType,
  getSchemaHeading,
} from 'helpers/parseSchema';

interface ObjectDocProps {
  viewSchema: IntrospectionObjectType;
  changeSchema: (event: React.SyntheticEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const ObjectDoc: React.FC<ObjectDocProps> = ({ viewSchema, changeSchema }) => {
  const { heading, desc, code, field_name, params, param_values, type } = styles;

  return (
    <Fragment>
      <h3 className={heading}>{getSchemaHeading(viewSchema)}</h3>
      {viewSchema &&
        viewSchema.fields.map((field: IntrospectionField, index) => (
          <Fragment key={`${field.name}-${index}`}>
            <p className={desc}>{getFieldDesc(field)}</p>
            <p className={code}>
              <span className={field_name}>{getFieldName(field)}</span>
              {field.args.length ? (
                <Fragment>
                  {'('}
                  {field.args.length === 1 ? (
                    <Fragment>
                      <span className={params}>{getFieldArgName(field.args[0])}</span>
                      {': '}
                      <span className={param_values} onClick={changeSchema}>
                        {getFieldArgType(field.args[0])}
                      </span>
                    </Fragment>
                  ) : (
                    field.args.map((argument: IntrospectionInputValue, index, array) => (
                      <Fragment key={`${argument.name}-${index}`}>
                        {<br />}
                        {'  '}
                        <span className={params}>{getFieldArgName(argument)}</span>
                        {': '}
                        <span className={param_values} onClick={changeSchema}>
                          {getFieldArgType(argument)}
                        </span>
                        {index === array.length - 1 ? <br /> : ', '}
                      </Fragment>
                    ))
                  )}
                  {')'}
                </Fragment>
              ) : null}
              :{' '}
              <span className={type} onClick={changeSchema}>
                {getFieldType(field)}
              </span>
            </p>
          </Fragment>
        ))}
    </Fragment>
  );
};
