/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3213891844"?: PrimitiveOverrideProps<FlexProps>;
    "LogoCodster 1"?: PrimitiveOverrideProps<ViewProps>;
    "Capa 1"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3891877?: PrimitiveOverrideProps<IconProps>;
    Vector3891878?: PrimitiveOverrideProps<IconProps>;
    Vector3891879?: PrimitiveOverrideProps<IconProps>;
    Vector3891880?: PrimitiveOverrideProps<IconProps>;
    Vector3891881?: PrimitiveOverrideProps<IconProps>;
    Vector3891882?: PrimitiveOverrideProps<IconProps>;
    Vector3891883?: PrimitiveOverrideProps<IconProps>;
    Vector3891884?: PrimitiveOverrideProps<IconProps>;
    Vector3891885?: PrimitiveOverrideProps<IconProps>;
    Vector3891886?: PrimitiveOverrideProps<IconProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Codster?: PrimitiveOverrideProps<TextProps>;
    "Frame 3213891849"?: PrimitiveOverrideProps<FlexProps>;
    Vector389616?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    organizacion?: any;
} & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
