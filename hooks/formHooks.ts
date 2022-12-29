import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T = {} as T) => {
  const [form, setForm] = useState<T>(initialState);

  const onChangeInputField = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onResetForm = () => {
    setForm(initialState);
  };

  return [form, onChangeInputField, onResetForm] as [
    T,
    (event: ChangeEvent<HTMLInputElement>) => void,
    () => void
  ];
};
