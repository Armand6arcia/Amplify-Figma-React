/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
export declare type NavAppOverridesProps = {
    NavApp?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321386960"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Aplicaciones?: PrimitiveOverrideProps<TextProps>;
    "Frame 321386962"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavAppProps = React.PropsWithChildren<Partial<FlexProps> & {
    setCreateMode?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavAppOverridesProps | undefined | null;
}>;
export default function NavApp(props: NavAppProps): React.ReactElement;
