import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, message } from 'antd';
import './index.less'
import { deepClone } from '@/utils/objectUtils/deepClone';
import { userLogin, userRegister } from './service';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  name?: string;
  password?: string;
  email?: string;
};

const Login = () => {
  const navigate = useNavigate();

  const onLoginFinish = (values: any) => {
    const formData = deepClone(values);
    userLogin(formData).then((res: any) => {
      message.success("登录成功！");
      const { access_token, refresh_token } = res.data.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      navigate('/home');
    })
  }

  const onRegisterFinish = (values: any) => {
    const formData = deepClone(values);
    userRegister(formData).then(() => {
      message.success("注册成功！马上登录吧！");
    })
  };

  return (
    <div className='login-page'>
      <div className="section">
        <div className="container mx-auto">
          <div className="flex full-height justify-content-center">
            <div className="flex-auto text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>登录 </span>
                  <span>注册</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>

                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">登录</h4>
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onLoginFinish}
                            autoComplete="off"
                          >
                            <Form.Item<FieldType>
                              name="name"
                              rules={[{ required: true, message: '请输入你的用户名！' }]}
                              style={{
                                marginBottom: '10px',
                              }}
                            >
                              <div className="form-group">
                                <input type="text" name="logname" className="form-style" placeholder="你的用户名" id="logname"
                                  autoComplete="off" />
                                <i className="input-icon uil uil-user"><UserOutlined /></i>
                              </div>
                            </Form.Item>

                            <Form.Item<FieldType>
                              // label="Password"
                              name="password"
                              rules={[{ required: true, message: '请输入你的密码！' }]}
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <div className="form-group !mt-2">
                                <input type="password" name="logpass" className="form-style" placeholder="你的密码"
                                  id="logpass" autoComplete="off" />
                                <i className="input-icon uil uil-lock-alt"><LockOutlined /></i>
                              </div>
                            </Form.Item>

                            <Form.Item
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <Button className="btn mt-4" htmlType="submit">提交</Button>
                            </Form.Item>
                          </Form>

                          {/* <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">忘记密码？</a>
                          </p> */}

                        </div>
                      </div>
                    </div>

                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">注册</h4>
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onRegisterFinish}
                            autoComplete="off"
                          >
                            <Form.Item<FieldType>
                              name="name"
                              rules={[{ required: true, message: '请输入你的用户名！' }]}
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <div className="form-group">
                                <input type="text" name="logname" className="form-style" placeholder="你的用户名" id="logname"
                                  autoComplete="off" />
                                <i className="input-icon uil uil-user"><UserOutlined /></i>
                              </div>
                            </Form.Item>

                            <Form.Item<FieldType>

                              name="email"
                              rules={[{ required: true, message: '请输入你的邮箱！' }]}
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <div className="form-group !mt-2">
                                <input type="email" name="logemail" className="form-style" placeholder="你的邮箱" id="logemail"
                                  autoComplete="off" />
                                <i className="input-icon uil uil-at"><MailOutlined /></i>
                              </div>
                            </Form.Item>

                            <Form.Item<FieldType>
                              name="password"
                              rules={[{ required: true, message: '请输入你的密码！' }]}
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <div className="form-group !mt-2">
                                <input type="password" name="logpass" className="form-style" placeholder="你的密码"
                                  id="logpass" autoComplete="off" />
                                <i className="input-icon uil uil-lock-alt"><LockOutlined /></i>
                              </div>
                            </Form.Item>

                            <Form.Item
                              style={{
                                marginBottom: '5px',
                              }}
                            >
                              <Button className="btn mt-4" htmlType="submit">提交</Button>
                            </Form.Item>
                          </Form>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
