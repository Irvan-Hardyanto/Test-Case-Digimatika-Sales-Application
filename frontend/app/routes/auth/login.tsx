import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
} from "reactstrap";
import TextInput from "~/components/TextInput";
import { useLogin } from "~/hooks/useLogin";

function Login() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
  });

  const {mutate, isError, isPending, isSuccess} = useLogin();

  useEffect(()=>{
    console.log('mutation is: ',isPending)
  },[isPending])

  useEffect(()=>{
    console.log("isError is: ",isError);
  },[isError])

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    mutate(data);

    // alert("response from api is "+response);

  };
  return (
    <div
      style={{ height: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card>
        <CardBody>
          <CardTitle>
            <p className="font-bond">LOGIN</p>
          </CardTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextInput
                label="Email"
                name="email"
                invalid={!!errors.email}
                rules={{ required: "Email is required" }}
                control={control}
                error={`${errors?.email?.message}`}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                label="Password"
                name="password"
                invalid={!!errors.password}
                rules={{ required: "Password is required" }}
                control={control}
                inputType="password"
                error={`${errors?.password?.message}`}
              />
              {errors.passwd && (
                <small className="text-danger">{`${errors.passwd.message}`}</small>
              )}
            </FormGroup>
            <Button color="primary" type="submit">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
