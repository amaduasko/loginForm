import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { lightBlue } from "@material-ui/core/colors";

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Container = styled.div`
  width: 35%;
  height: max-content;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
  @media only screen and (max-width: 576px) {
    width: 80%;
  }
  @media only screen and (max-width: 375px) {
    width: 90%;
  }
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormTitle = styled.div``;
const Icon = styled.a`
  display: block;
  width: fit-content;
  background-color: #e10050;
  padding: 8px 10px;
  border-radius: 50%;
  margin: auto;
`;
const Title = styled.h2`
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.16px;
  line-height: 18px;
`;
const HelperText = styled.a`
  color: #2196f3;
  letter-spacing: 0.16px;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const EditedTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#2196F3"
      }
    }
  }
})(TextField);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonStyle: {
      color: "#fff",
      textTransform: "inherit"
    }
  })
);

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
});

const CopyRightText = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 20%;
  @media only screen and (max-width: 576px) {
    font-size: 11px;
  }
`;

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid },
  ...custom
}: any) => (
  <EditedTextField
    label={label}
    variant="outlined"
    placeholder={label}
    error={touched && invalid}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }: any) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

const Form: React.FC = (props: any) => {
  const { handleSubmit, pristine, submitting } = props;
  const classes = useStyles();
  return (
    <Container>
      <ContainerForm onSubmit={handleSubmit}>
        <FormTitle>
          <Icon>
            <LockOutlinedIcon style={{ color: "#fff" }} />
          </Icon>
          <Title>Вход в аккаунт</Title>
        </FormTitle>
        <Field
          name="email"
          type="email"
          label="Почта*"
          variant="outlined"
          size="small"
          margin="dense"
          component={renderTextField}
        />
        <Field
          name="password"
          label="Пароль*"
          type="password"
          variant="outlined"
          size="small"
          margin="dense"
          component={renderTextField}
        />
        <Field
          name="form-checkbox"
          component={renderCheckbox}
          color="primary"
          label="Запомнить меня"
        />

        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.buttonStyle}
            disabled={pristine || submitting}
          >
            Войти в аккаунт
          </Button>
        </ThemeProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px"
          }}
        >
          <HelperText href="/">Забыли пароль ? </HelperText>
          <HelperText href="/">Ещё нет аккаунта? Регистрация</HelperText>
        </div>
      </ContainerForm>
      <CopyRightText>Copyright© Ваш сайт 2019.</CopyRightText>
    </Container>
  );
};

export const LoginForm = reduxForm({
  form: "login-form",
  validate
})(Form);
