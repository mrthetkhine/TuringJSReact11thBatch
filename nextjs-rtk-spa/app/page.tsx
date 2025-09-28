import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import SimpleForm from "@/app/components/form/SimpleForm";
import NormalForm from "@/app/components/form/NormalForm";
import CustomForm from "@/app/components/custom-form/CustomForm";
import FormWithMui from "@/app/components/form/FormWithMui";

export default function IndexPage() {
  return (<div>
   {/* <Counter />;*/}
   {/* <SimpleForm/>*/}
   {/* <NormalForm/>*/}
  {/*  <CustomForm/>*/}
   {/* <FormWithMui/>*/}
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
