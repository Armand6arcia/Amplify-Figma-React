/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type XamiCardsUpdateFormInputValues = {
    Title?: string;
    Img?: string;
    Modelo?: string;
    Temperatura?: number;
    Entrenamiento?: string;
    Bienvenida?: string;
    Peticiones?: boolean;
    Acceso?: boolean;
    Seguridad?: boolean;
};
export declare type XamiCardsUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Img?: ValidationFunction<string>;
    Modelo?: ValidationFunction<string>;
    Temperatura?: ValidationFunction<number>;
    Entrenamiento?: ValidationFunction<string>;
    Bienvenida?: ValidationFunction<string>;
    Peticiones?: ValidationFunction<boolean>;
    Acceso?: ValidationFunction<boolean>;
    Seguridad?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type XamiCardsUpdateFormOverridesProps = {
    XamiCardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Img?: PrimitiveOverrideProps<TextFieldProps>;
    Modelo?: PrimitiveOverrideProps<SelectFieldProps>;
    Temperatura?: PrimitiveOverrideProps<TextFieldProps>;
    Entrenamiento?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Bienvenida?: PrimitiveOverrideProps<TextFieldProps>;
    Peticiones?: PrimitiveOverrideProps<SwitchFieldProps>;
    Acceso?: PrimitiveOverrideProps<SwitchFieldProps>;
    Seguridad?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type XamiCardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: XamiCardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    xamiCards?: any;
    onSubmit?: (fields: XamiCardsUpdateFormInputValues) => XamiCardsUpdateFormInputValues;
    onSuccess?: (fields: XamiCardsUpdateFormInputValues) => void;
    onError?: (fields: XamiCardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: XamiCardsUpdateFormInputValues) => XamiCardsUpdateFormInputValues;
    onValidate?: XamiCardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function XamiCardsUpdateForm(props: XamiCardsUpdateFormProps): React.ReactElement;
