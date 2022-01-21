import { FieldAttributes, FieldProps } from 'formik';
import { FC, ReactElement } from 'react';

/*
  Override Field props according to props of passed component
*/
declare module 'formik' {
  type CustomFieldAttributes<C extends FC<Record<string, unknown>>> = Omit<
    FieldAttributes,
    'component' | 'field'
  > & {
    component: C;
  } & (C extends FC<infer P>
      ? Omit<P, keyof FieldProps>
      : Record<string, never>);

  export const Field: <C extends FC<any>>(
    props: CustomFieldAttributes<C>
  ) => ReactElement<any, any> | null;
}
