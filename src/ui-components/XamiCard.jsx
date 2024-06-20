/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function XamiCard(props) {
  const { xamiCards, button, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"/updateform"}${xamiCards?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "XamiCard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Image
          width="unset"
          height="288px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={xamiCards?.Img}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={xamiCards?.Title}
            {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="288px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Accion")}
        >
          <Flex
            gap="0"
            direction="row"
            width="112px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="176px"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            backgroundColor="rgba(4,125,149,1)"
            onClick={() => {
              buttonOnClick();
            }}
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
              children="Acción"
              {...getOverrideProps(overrides, "label")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="170px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              border="1px SOLID rgba(137,148,159,1)"
              borderRadius="5px"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Input")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=""
                {...getOverrideProps(overrides, "placeholder")}
              ></Text>
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
              ></View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
