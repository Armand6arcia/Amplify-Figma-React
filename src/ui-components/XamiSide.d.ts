/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type XamiSideOverridesProps = {
    XamiSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3213852805"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3213852806"?: PrimitiveOverrideProps<FlexProps>;
    Section?: PrimitiveOverrideProps<FlexProps>;
    link3852815?: PrimitiveOverrideProps<FlexProps>;
    icon3852816?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493361?: MyIconProps;
    label3852818?: PrimitiveOverrideProps<TextProps>;
    link3852819?: PrimitiveOverrideProps<FlexProps>;
    icon3852820?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39443603?: MyIconProps;
    label3852822?: PrimitiveOverrideProps<TextProps>;
    link3852823?: PrimitiveOverrideProps<FlexProps>;
    icon3852824?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3856539?: MyIconProps;
    label3852826?: PrimitiveOverrideProps<TextProps>;
    "Frame 3213852841"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3856541?: MyIconProps;
    "Frame 3213852845"?: PrimitiveOverrideProps<FlexProps>;
    "Cerrar Sesi\u00F3n"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type XamiSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: XamiSideOverridesProps | undefined | null;
}>;
export default function XamiSide(props: XamiSideProps): React.ReactElement;
