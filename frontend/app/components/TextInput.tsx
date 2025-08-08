import React from "react";
import { Controller } from "react-hook-form";
import { Input, Label } from "reactstrap";
import type { InputType } from "reactstrap/types/lib/Input";
type Props = {
  label?: string;
  name: string;
  defaultValue?: string;
  inputType?: InputType;
  invalid?: boolean;
  error?: string;
  control: any;
  rules: any;
}
function TextInput({label,name,invalid,error,control,defaultValue,rules,inputType}:Props) {
  return (
    <>
      {label && <Label for={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue? defaultValue : ""}
        rules={rules}
        render={({ field }) => <Input type={inputType?inputType:"text"} invalid={invalid} {...field} />}
      />
      {invalid && (
        <small className="text-danger">{`${error}`}</small>
      )}
    </>
  );
}

export default TextInput;
