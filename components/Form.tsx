"use client";
import { createCamps } from "@/utils/action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>;
};

const Form = () => {
  const [message, formAction] = useActionState(createCamps, null);

  return (
    <>
      {message && <h1>{message}</h1>}
      <form action={formAction}>
        Form
        <input
          className="border"
          name="title"
          placeholder="Camping Name"
          defaultValue="HH-Party 102"
        />
        <input
          className="border"
          name="location"
          placeholder="Location"
          defaultValue="Hua-Hin"
        />
        <SubmitButton />
      </form>
    </>
  );
};
export default Form;
