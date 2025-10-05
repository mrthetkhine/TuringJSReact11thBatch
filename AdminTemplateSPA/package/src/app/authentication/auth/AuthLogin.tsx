import React from "react";
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
import {useAppSelector } from "@/lib/hooks";
import {LoginFormData, LoginFormSchema } from "@/lib/schema/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import useLogin from "@/lib/hooks/useLogin";
import { selectAuth } from "@/lib/features/auth/authSlice";
import { useForm } from "react-hook-form";
interface loginType {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) =>{
  const auth = useAppSelector(selectAuth);
  const loginAction = useLogin();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormData),
  });
  const onSubmit = (data: LoginFormSchema) => {
    console.log('login form submit ',data);
    loginAction(data);
  }
  return (

      <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
              {title}
            </Typography>
        ) : null}

        {subtext}
        <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
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
            <CustomTextField variant="outlined"
                             fullWidth
                             label="Username"
                             {...register('username')}
                             error={!!errors.username}
                             helperText={errors.username?.message}
                             margin="normal"/>
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
                type="password" variant="outlined"
                label="Password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                margin="normal"/>
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
