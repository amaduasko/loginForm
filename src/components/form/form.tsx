import React from "react";
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
import { connect } from "react-redux";
import {
  setInputField,
  setPasswordField,
  setCheckBoxStatus,
  getFormValue
} from "../../redux/action";

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

const mapStateToProps = (state: any) => {
  return {
    inputField: state.changeInputField.inputField,
    passwordField: state.changePasswordField.passwordField,
    checkBoxStatus: state.changeCheckBoxStatus.checkBoxStatus
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  onInputChange: (event: any) => dispatch(setInputField(event.target.value)),
  onPasswordChange: (event: any) =>
    dispatch(setPasswordField(event.target.value)),
  onCheckboxUpdate: (event: any) =>
    dispatch(setCheckBoxStatus(event.target.checked)),
  onFormSubmit: (event: any) => {
    event.preventDefault();
    console.log(dispatch);
    dispatch(getFormValue(event.target.value));
  }
});
const Form: React.FC = (props: any) => {
  const {
    checkBoxStatus,
    onInputChange,
    onPasswordChange,
    onCheckboxUpdate,
    onFormSubmit
  } = props;
  const classes = useStyles();
  return (
    <Container>
      <ContainerForm onSubmit={onFormSubmit}>
        <FormTitle>
          <Icon>
            <LockOutlinedIcon style={{ color: "#fff" }} />
          </Icon>
          <Title>Вход в аккаунт</Title>
        </FormTitle>
        <EditedTextField
          id="user-email"
          label="Почта*"
          variant="outlined"
          size="small"
          margin="dense"
          onChange={onInputChange}
        />
        <EditedTextField
          id="user-password"
          label="Пароль*"
          type="password"
          variant="outlined"
          size="small"
          margin="dense"
          onChange={onPasswordChange}
        />
        <ThemeProvider theme={theme}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={onCheckboxUpdate}
                value={checkBoxStatus}
              />
            }
            label="Запомнить меня"
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.buttonStyle}
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
export default connect(mapStateToProps, mapDispatchToProps)(Form);
