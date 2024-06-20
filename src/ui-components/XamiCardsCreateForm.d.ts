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
export declare type XamiCardsCreateFormInputValues = {
    Title?: string;
};
export declare type XamiCardsCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type XamiCardsCreateFormOverridesProps = {
    XamiCardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type XamiCardsCreateFormProps = React.PropsWithChildren<{
    overrides?: XamiCardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: XamiCardsCreateFormInputValues) => XamiCardsCreateFormInputValues;
    onSuccess?: (fields: XamiCardsCreateFormInputValues) => void;
    onError?: (fields: XamiCardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: XamiCardsCreateFormInputValues) => XamiCardsCreateFormInputValues;
    onValidate?: XamiCardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function XamiCardsCreateForm(props: XamiCardsCreateFormProps): React.ReactElement;
