import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from "reactstrap";
import TextInput from "~/components/TextInput";

function CreateProduct() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log("SUBMIT FORM DATA");
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ height: "100%" }} className="d-flex flex-col p-4">
      <h1>Tambah Produk</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextInput
            label="Nama Produk"
            name="product_name"
            invalid={!!errors.product_name}
            rules={{
              required: "Product name is required",
              pattern: {
                value: /^[A-Za-z0-9 ]+$/,
                message: "Invalid product name",
              },
            }}
            control={control}
            error={`${errors?.product_name?.message}`}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            label="Jumlah Produk"
            name="product_stock"
            inputType="number"
            invalid={!!errors.product_stock}
            rules={{
              min: {
                value: 1,
                message: "Quantity must be greater than 0",
              },
            }}
            control={control}
            error={`${errors?.product_stock?.message}`}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            label="Volume Produk"
            name="product_volume"
            inputType="number"
            invalid={!!errors.product_volume}
            rules={{
              min: {
                value: 1,
                message: "Product volume must be greater than 0",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "product volume is not a valid number",
              }
            }}
            control={control}
            error={`${errors?.product_volume?.message}`}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            label="Satuan Produk"
            name="product_unit"
            invalid={!!errors.product_unit}
            rules={{
              required: "product unit is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "invalid product unit",
              },
            }}
            control={control}
            error={`${errors?.product_unit?.message}`}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Simpan
        </Button>
      </Form>
    </div>
  );
}

export default CreateProduct;
