import {
  IntrospectionField,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionOutputTypeRef,
  IntrospectionScalarType,
  IntrospectionType,
} from 'graphql';

export const getInititalSchema = (apiSchemas: ReadonlyArray<IntrospectionType>): number => {
  if (apiSchemas.length) {
    return apiSchemas.findIndex((schema) => schema.name === 'Query');
  }
  return 0;
};

export const getSchemaHeading = (schema: IntrospectionType): string => {
  if (!schema) {
    return '';
  }
  return schema.name;
};

export const getFieldDesc = (field: IntrospectionField | IntrospectionInputValue): string => {
  return field.description || '';
};

export const getFieldName = (field: IntrospectionField | IntrospectionInputValue): string => {
  return field.name;
};

export const getFieldArgName = (fieldArg: IntrospectionInputValue): string => {
  return fieldArg.name;
};

const getNameOfType = (type: IntrospectionInputTypeRef | IntrospectionOutputTypeRef): string => {
  const { kind } = type;
  if (
    kind === 'ENUM' ||
    kind === 'INPUT_OBJECT' ||
    kind === 'SCALAR' ||
    kind === 'INTERFACE' ||
    kind === 'OBJECT' ||
    kind === 'UNION'
  ) {
    return type.name;
  }
  if (kind === 'NON_NULL') {
    return `${getNameOfType(type.ofType)}!`;
  }
  if (kind === 'LIST') {
    return `[ ${getNameOfType(type.ofType)} ]`;
  }
  return 'name calculation error';
};

export const getFieldArgType = (fieldArg: IntrospectionInputValue): string => {
  const name = getNameOfType(fieldArg.type);
  return name;
};

export const getFieldType = (field: IntrospectionField | IntrospectionInputValue): string => {
  const name = getNameOfType(field.type);
  return name;
};

export const getScalarDesc = (viewSchema: IntrospectionScalarType) => {
  const style = `
    padding: 2px 5px;
    border-radius: 3px;
    background-color: #22221f;
    color: white;
    font-family: 'Fira code';
  `;
  if (viewSchema.description) {
    if (viewSchema.description.includes('`')) {
      const descSplit = viewSchema.description.split('`');
      const mappedDesc = descSplit.map((descItem, index) =>
        index % 2 === 0 ? descItem : `<span style="${style}">${descItem}</span>`
      );
      return mappedDesc.join('');
    }
    return viewSchema.description;
  }
  return 'Description is not provided';
};
