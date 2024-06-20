/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavApp(props) {
  const { setCreateMode, overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1059px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="0.5px SOLID rgba(204,204,204,1)"
      padding="23.5px 31.5px 23.5px 31.5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavApp")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="300px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321386960")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="home"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Aplicaciones"
          {...getOverrideProps(overrides, "Aplicaciones")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="645px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321386962")}
      >
        <Flex
          gap="0"
          direction="row"
          width="228px"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(60,172,207,1)"
          {...getOverrideProps(overrides, "Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="27px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="NUEVA APLICACIÓN"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
