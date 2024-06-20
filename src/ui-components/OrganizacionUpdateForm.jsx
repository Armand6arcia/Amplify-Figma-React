/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrganizacion } from "../queries/queries";
import { updateOrganizacion } from "../queries/mutations";
const client = generateClient();
export default function OrganizacionUpdateForm(props) {
  const {
    id: idProp,
    organizacion: organizacionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nombre: "",
    Correo: "",
  };
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [Correo, setCorreo] = React.useState(initialValues.Correo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = organizacionRecord
      ? { ...initialValues, ...organizacionRecord }
      : initialValues;
    setNombre(cleanValues.Nombre);
    setCorreo(cleanValues.Correo);
    setErrors({});
  };
  const [organizacionRecord, setOrganizacionRecord] = React.useState(
    organizacionModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrganizacion.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrganizacion
        : organizacionModelProp;
      setOrganizacionRecord(record);
    };
    queryData();
  }, [idProp, organizacionModelProp]);
  React.useEffect(resetStateValues, [organizacionRecord]);
  const validations = {
    Nombre: [],
    Correo: [{ type: "Email" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Nombre: Nombre ?? null,
          Correo: Correo ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateOrganizacion.replaceAll("__typename", ""),
            variables: {
              input: {
                id: organizacionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrganizacionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre: value,
              Correo,
            };
            const result = onChange(modelFields);
            value = result?.Nombre ?? value;
          }
          if (errors.Nombre?.hasError) {
            runValidationTasks("Nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("Nombre", Nombre)}
        errorMessage={errors.Nombre?.errorMessage}
        hasError={errors.Nombre?.hasError}
        {...getOverrideProps(overrides, "Nombre")}
      ></TextField>
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={Correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Correo: value,
            };
            const result = onChange(modelFields);
            value = result?.Correo ?? value;
          }
          if (errors.Correo?.hasError) {
            runValidationTasks("Correo", value);
          }
          setCorreo(value);
        }}
        onBlur={() => runValidationTasks("Correo", Correo)}
        errorMessage={errors.Correo?.errorMessage}
        hasError={errors.Correo?.hasError}
        {...getOverrideProps(overrides, "Correo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || organizacionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || organizacionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
