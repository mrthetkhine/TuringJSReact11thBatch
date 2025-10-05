'use client';
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import SimpleForm from "@/app/components/form/SimpleForm";
import NormalForm from "@/app/components/form/NormalForm";
import CustomForm from "@/app/components/custom-form/CustomForm";
import FormWithMui from "@/app/components/form/FormWithMui";
import withProtectedRoute from "@/app/components/withProtectedRoute";

 function IndexPage() {
  return (<div>
   {/* <Counter />;*/}
   {/* <SimpleForm/>*/}
   {/* <NormalForm/>*/}
  {/*  <CustomForm/>*/}
   {/* <FormWithMui/>*/}
  </div>);
}
const ProtectedIndexPage = withProtectedRoute(IndexPage);
export default ProtectedIndexPage;