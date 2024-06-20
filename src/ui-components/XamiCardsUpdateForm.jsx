/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getXamiCards } from "../queries/queries";
import { updateXamiCards } from "../queries/mutations";
const client = generateClient();
export default function XamiCardsUpdateForm(props) {
  const {
    id: idProp,
    xamiCards: xamiCardsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Title: "",
    Img: "",
    Modelo: "",
    Temperatura: "",
    Entrenamiento: "",
    Bienvenida: "",
    Peticiones: false,
    Acceso: false,
    Seguridad: false,
  };
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [Img, setImg] = React.useState(initialValues.Img);
  const [Modelo, setModelo] = React.useState(initialValues.Modelo);
  const [Temperatura, setTemperatura] = React.useState(
    initialValues.Temperatura
  );
  const [Entrenamiento, setEntrenamiento] = React.useState(
    initialValues.Entrenamiento
  );
  const [Bienvenida, setBienvenida] = React.useState(initialValues.Bienvenida);
  const [Peticiones, setPeticiones] = React.useState(initialValues.Peticiones);
  const [Acceso, setAcceso] = React.useState(initialValues.Acceso);
  const [Seguridad, setSeguridad] = React.useState(initialValues.Seguridad);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = xamiCardsRecord
      ? { ...initialValues, ...xamiCardsRecord }
      : initialValues;
    setTitle(cleanValues.Title);
    setImg(cleanValues.Img);
    setModelo(cleanValues.Modelo);
    setTemperatura(cleanValues.Temperatura);
    setEntrenamiento(cleanValues.Entrenamiento);
    setBienvenida(cleanValues.Bienvenida);
    setPeticiones(cleanValues.Peticiones);
    setAcceso(cleanValues.Acceso);
    setSeguridad(cleanValues.Seguridad);
    setErrors({});
  };
  const [xamiCardsRecord, setXamiCardsRecord] =
    React.useState(xamiCardsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getXamiCards.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getXamiCards
        : xamiCardsModelProp;
      setXamiCardsRecord(record);
    };
    queryData();
  }, [idProp, xamiCardsModelProp]);
  React.useEffect(resetStateValues, [xamiCardsRecord]);
  const validations = {
    Title: [],
    Img: [{ type: "URL" }],
    Modelo: [],
    Temperatura: [],
    Entrenamiento: [],
    Bienvenida: [],
    Peticiones: [],
    Acceso: [],
    Seguridad: [],
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
          Title: Title ?? null,
          Img: Img ?? null,
          Modelo: Modelo ?? null,
          Temperatura: Temperatura ?? null,
          Entrenamiento: Entrenamiento ?? null,
          Bienvenida: Bienvenida ?? null,
          Peticiones: Peticiones ?? null,
          Acceso: Acceso ?? null,
          Seguridad: Seguridad ?? null,
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
            query: updateXamiCards.replaceAll("__typename", ""),
            variables: {
              input: {
                id: xamiCardsRecord.id,
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
      {...getOverrideProps(overrides, "XamiCardsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title: value,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={Img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Img: value,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Img ?? value;
          }
          if (errors.Img?.hasError) {
            runValidationTasks("Img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("Img", Img)}
        errorMessage={errors.Img?.errorMessage}
        hasError={errors.Img?.hasError}
        {...getOverrideProps(overrides, "Img")}
      ></TextField>
      <SelectField
        label="Modelo"
        placeholder="Please select an option"
        isDisabled={false}
        value={Modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo: value,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Modelo ?? value;
          }
          if (errors.Modelo?.hasError) {
            runValidationTasks("Modelo", value);
          }
          setModelo(value);
        }}
        onBlur={() => runValidationTasks("Modelo", Modelo)}
        errorMessage={errors.Modelo?.errorMessage}
        hasError={errors.Modelo?.hasError}
        {...getOverrideProps(overrides, "Modelo")}
      >
        <option
          children="Claude V3"
          value="Claude V3"
          {...getOverrideProps(overrides, "Modelooption0")}
        ></option>
      </SelectField>
      <TextField
        label="Temperatura"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Temperatura}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura: value,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Temperatura ?? value;
          }
          if (errors.Temperatura?.hasError) {
            runValidationTasks("Temperatura", value);
          }
          setTemperatura(value);
        }}
        onBlur={() => runValidationTasks("Temperatura", Temperatura)}
        errorMessage={errors.Temperatura?.errorMessage}
        hasError={errors.Temperatura?.hasError}
        {...getOverrideProps(overrides, "Temperatura")}
      ></TextField>
      <TextAreaField
        label="Texto de Entrenamiento"
        isRequired={false}
        isReadOnly={false}
        value={Entrenamiento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento: value,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Entrenamiento ?? value;
          }
          if (errors.Entrenamiento?.hasError) {
            runValidationTasks("Entrenamiento", value);
          }
          setEntrenamiento(value);
        }}
        onBlur={() => runValidationTasks("Entrenamiento", Entrenamiento)}
        errorMessage={errors.Entrenamiento?.errorMessage}
        hasError={errors.Entrenamiento?.hasError}
        {...getOverrideProps(overrides, "Entrenamiento")}
      ></TextAreaField>
      <TextField
        label="Mensaje de bienvenida"
        isRequired={false}
        isReadOnly={false}
        value={Bienvenida}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida: value,
              Peticiones,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Bienvenida ?? value;
          }
          if (errors.Bienvenida?.hasError) {
            runValidationTasks("Bienvenida", value);
          }
          setBienvenida(value);
        }}
        onBlur={() => runValidationTasks("Bienvenida", Bienvenida)}
        errorMessage={errors.Bienvenida?.errorMessage}
        hasError={errors.Bienvenida?.hasError}
        {...getOverrideProps(overrides, "Bienvenida")}
      ></TextField>
      <SwitchField
        label="Solo peticiones desde el dominio*"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Peticiones}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones: value,
              Acceso,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Peticiones ?? value;
          }
          if (errors.Peticiones?.hasError) {
            runValidationTasks("Peticiones", value);
          }
          setPeticiones(value);
        }}
        onBlur={() => runValidationTasks("Peticiones", Peticiones)}
        errorMessage={errors.Peticiones?.errorMessage}
        hasError={errors.Peticiones?.hasError}
        {...getOverrideProps(overrides, "Peticiones")}
      ></SwitchField>
      <SwitchField
        label="Acceso público*"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Acceso}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso: value,
              Seguridad,
            };
            const result = onChange(modelFields);
            value = result?.Acceso ?? value;
          }
          if (errors.Acceso?.hasError) {
            runValidationTasks("Acceso", value);
          }
          setAcceso(value);
        }}
        onBlur={() => runValidationTasks("Acceso", Acceso)}
        errorMessage={errors.Acceso?.errorMessage}
        hasError={errors.Acceso?.hasError}
        {...getOverrideProps(overrides, "Acceso")}
      ></SwitchField>
      <SwitchField
        label="Pregunta de seguridad requerida*"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Seguridad}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Title,
              Img,
              Modelo,
              Temperatura,
              Entrenamiento,
              Bienvenida,
              Peticiones,
              Acceso,
              Seguridad: value,
            };
            const result = onChange(modelFields);
            value = result?.Seguridad ?? value;
          }
          if (errors.Seguridad?.hasError) {
            runValidationTasks("Seguridad", value);
          }
          setSeguridad(value);
        }}
        onBlur={() => runValidationTasks("Seguridad", Seguridad)}
        errorMessage={errors.Seguridad?.errorMessage}
        hasError={errors.Seguridad?.hasError}
        {...getOverrideProps(overrides, "Seguridad")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="ACTUALIZAR"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || xamiCardsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
