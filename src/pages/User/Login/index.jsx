import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { REGEX } from "../../../constants/validate";
import TitlePage from "../../../components/User/TitlePage";
import history from "../../../utils/history";
import { loginAction } from "../../../redux/actions";
import "./styles.scss";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginAction(values));
  };

  return (
    <main className="login container-1">
      <TitlePage title="Đăng Nhập" />
      <Row justify="center">
        <Col span={12}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <p className="login-title">Chào mừng bạn trở lại!</p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                () => ({
                  validator(_, value) {
                    if (!value || value.match(REGEX.EMAIL_REGEX)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("The input is not valid E-mail!")
                    );
                  },
                }),
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item valuePropName="checked" noStyle>
                <Checkbox>Nhớ tài khoản</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" onClick={() => history.push("/register")}>
                Quên mật khẩu
              </Link>
            </Form.Item>

            <Form.Item>
              <Row>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button my-1"
                  size="large"
                >
                  Đăng Nhập
                </Button>
              </Row>
              Hoặc{" "}
              <Link to="/register" className="login-form-register">
                Đăng ký ngay!
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </main>
  );
}

export default LoginPage;
