import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "mutations/gqlQueriesMutations";

export default function Login() {
  const logout = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };

  return (
    <Button type="submit" label="Logout" className="p-mt-2" onClick={logout} />
  );
}
