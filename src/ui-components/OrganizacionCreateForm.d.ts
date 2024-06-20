/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizacionCreateFormInputValues = {
    Nombre?: string;
    Correo?: string;
};
export declare type OrganizacionCreateFormValidationValues = {
    Nombre?: ValidationFunction<string>;
    Correo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizacionCreateFormOverridesProps = {
    OrganizacionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Correo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizacionCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganizacionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganizacionCreateFormInputValues) => OrganizacionCreateFormInputValues;
    onSuccess?: (fields: OrganizacionCreateFormInputValues) => void;
    onError?: (fields: OrganizacionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizacionCreateFormInputValues) => OrganizacionCreateFormInputValues;
    onValidate?: OrganizacionCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizacionCreateForm(props: OrganizacionCreateFormProps): React.ReactElement;
