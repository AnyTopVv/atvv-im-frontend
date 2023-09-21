import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import './index.less'

const Login = () => {

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
                          <div className="form-group">
                            <input type="text" name="logname" className="form-style" placeholder="你的用户名" id="logname"
                              autoComplete="off" />
                            <i className="input-icon uil uil-user"><UserOutlined /></i>
                          </div>
                          <div className="form-group !mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="你的密码"
                              id="logpass" autoComplete="off" />
                            <i className="input-icon uil uil-lock-alt"><LockOutlined /></i>
                          </div>
                          <a href="#" className="btn mt-4">提交</a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">忘记密码？</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">注册</h4>
                          <div className="form-group">
                            <input type="text" name="logname" className="form-style" placeholder="你的用户名" id="logname"
                              autoComplete="off" />
                            <i className="input-icon uil uil-user"><UserOutlined /></i>
                          </div>
                          <div className="form-group !mt-2">
                            <input type="email" name="logemail" className="form-style" placeholder="你的邮箱" id="logemail"
                              autoComplete="off" />
                            <i className="input-icon uil uil-at"><MailOutlined /></i>
                          </div>
                          <div className="form-group !mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="你的密码"
                              id="logpass" autoComplete="off" />
                            <i className="input-icon uil uil-lock-alt"><LockOutlined /></i>
                          </div>
                          <a href="#" className="btn mt-4">提交</a>
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
