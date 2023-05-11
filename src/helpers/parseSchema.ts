import {
  IntrospectionField,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionOutputTypeRef,
  IntrospectionType,
} from 'graphql';

export const getSchemaHeading = (schema: IntrospectionType): string => {
  if (!schema) {
    return '';
  }
  return schema.name;
};

export const getFieldDesc = (field: IntrospectionField): string => {
  return field.description || 'Description not provided';
};

export const getFieldName = (field: IntrospectionField): string => {
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
    return `[ ${getNameOfType(type.ofType)} ]`;
  }
  return 'name calculation error';
};

export const getFieldArgType = (fieldArg: IntrospectionInputValue): string => {
  const name = getNameOfType(fieldArg.type);
  return name;
};

export const getFieldType = (field: IntrospectionField): string => {
  const name = getNameOfType(field.type);
  return name;
};
