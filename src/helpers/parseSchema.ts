import {
  IntrospectionEnumType,
  IntrospectionField,
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionInterfaceType,
  IntrospectionObjectType,
  IntrospectionOutputTypeRef,
  IntrospectionScalarType,
  IntrospectionType,
  IntrospectionUnionType,
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

export const getViewSchema = (apiSchema: ReadonlyArray<IntrospectionType>, viewNum: number) => {
  if (apiSchema.length) {
    const kind = apiSchema[viewNum].kind;
    switch (kind) {
      case 'OBJECT':
        return apiSchema[viewNum] as IntrospectionObjectType;
      case 'INPUT_OBJECT':
        return apiSchema[viewNum] as IntrospectionInputObjectType;
      case 'ENUM':
        return apiSchema[viewNum] as IntrospectionEnumType;
      case 'INTERFACE':
        return apiSchema[viewNum] as IntrospectionInterfaceType;
      case 'UNION':
        return apiSchema[viewNum] as IntrospectionUnionType;
      case 'SCALAR':
        return apiSchema[viewNum] as IntrospectionScalarType;
    }
  }
};
