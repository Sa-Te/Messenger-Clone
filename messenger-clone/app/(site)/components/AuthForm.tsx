"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    if (variant == "REGISTER") {
      //axios register
    }

    if (variant == "LOGIN") {
      //next auth signin
    }
  };

  const socialAction = (action: String) => {
    setLoading(true);

    //nextauth social sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant == "REGISTER" && (
            <Input label="name" register={register} id="name" errors={errors} />
          )}
          <Input
            label="Email Address"
            id="email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={loading} fullWidth type="submit">
              {variant == "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
