import type { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  TextField
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import useMounted from 'src/hooks/useMounted';

const LoginJWT: FC = (props) => {
  const mounted = useMounted();
  const { login } = useAuth() as any;

  return (
    <Formik
      initialValues={{
        email: 'demo@jrtec.io',
        password: 'Password123!',
        submit: null
      }}
      validationSchema={
        Yup
          .object()
          .shape({
            email: Yup
              .string()
              .email('Debe ser un email válido.')
              .max(255)
              .required('El email es requerido.'),
            password: Yup
              .string()
              .max(255)
              .required('La constraseña es requerida.')
          })
      }
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }): Promise<void> => {
        try {
          await login(values.email, values.password);
          if (mounted.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (mounted.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }): JSX.Element => (
        <form
          noValidate
          onSubmit={handleSubmit}
          {...props}
        >
          <TextField
            autoFocus
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Correo electrónico"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Contraseña"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Ingresar
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Alert severity="info">
              <div>
                Usar
                {' '}
                <b>demo@jrtec.io</b>
                {' '}
                y la contraseña
                {' '}
                <b>Password123!</b>
              </div>
            </Alert>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginJWT;
