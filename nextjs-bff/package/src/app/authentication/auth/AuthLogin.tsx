import React, {useActionState} from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import {useForm} from "react-hook-form";
import {loginAction} from "@/lib/actions/authAction";
import { LoginFormValue,loginSchema } from "@/lib/schema/loginShema";
import {zodResolver} from "@hookform/resolvers/zod";

interface loginType {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}
const initialState = {
  success: "",
  errors: {
    username:"",
    password: "",
  }
};
const AuthLogin = ({ title, subtitle, subtext }: loginType) =>{
  const { register, handleSubmit, control } = useForm<LoginFormValue>({
    resolver: zodResolver(loginSchema), // Integrate Zod for schema-based validation
    defaultValues: {
      username:'',
      password:''
    },
  });
  const [state, login, pending] = useActionState(loginAction, initialState);
  console.log('state ',state);
  console.log('pending ',pending);
  return (
      <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
              {title}
            </Typography>
        ) : null}

        {subtext}
        <form action={login}>
          <Stack>
            <Box>
              <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="username"
                  mb="5px"
              >
                Username
              </Typography>
              <CustomTextField
                  name="username"
                  variant="outlined"
                  fullWidth
                  error={!!state?.errors?.username}
                  helperText={state?.errors?.username}/>
            </Box>
            <Box mt="25px">
              <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="password"
                  mb="5px"
              >
                Password
              </Typography>
              <CustomTextField
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={!!state?.errors?.password}
                  helperText={state?.errors?.password}/>
            </Box>
            <Stack
                justifyContent="space-between"
                direction="row"
                alignItems="center"
                my={2}
            >


            </Stack>
          </Stack>
          <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                disabled={pending}
            >
              Sign In
            </Button>
          </Box>
        </form>

        {subtitle}
      </>
  );

}
export default AuthLogin;
