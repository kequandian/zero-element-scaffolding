import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Layout, Button, message } from 'antd';
import { saveToken } from 'zero-element/lib/utils/request/token';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import JParticles from 'jparticles';
import AccountForm from './components/Account';
import MailReg from './components/MailReg';
import RFE from './components/RetrieveFromEmail';
import RFP from './components/RetrieveFromPhone';
import styles from './index.less';
import { query, post } from 'zero-element-antd/lib/utils/request';
import getUserInfo from './utils/getUserInfo';
import win from 'zero-element/lib/utils/window';
import { useModel } from 'zero-element/lib/Model';

const { Content } = Layout;
const cType = {
  'account': AccountForm,
  'mailReg': MailReg,
  'RFE': RFE,
  'RFP': RFP,
};

function LoginForm(props) {
  const [formType, setFormType] = useState('account');
  const [loading, setLoading] = useState(false);
  const model = useModel('global');

  useEffect(_ => {
    new JParticles.particle('#loginBG', {
      color: '#25bfff',
      lineShape: 'cube',
      range: 2000,
      proximity: 100,
      // 开启视差效果
      // parallax: true,
    });
  }, []);

  function handleSubmit(values) {
    setLoading(true);
    post('/api/sys/oauth/login', values, {
      message: null,
    }).then((data) => {
      // model.setPerm(data.perms);
      saveToken({
        token: data.accessToken,
        // permissions: formatPerms(data.perms),
        remember: values.remember,
      });
      model.queryPerm();
    })
      // .then(getUserInfo)
      .then(_ => {
        if (win.ZEle.indexPage) {
          history.push(win.ZEle.indexPage);
        } else {
          history.push('/');
        }
      })
      .finally(_ => {
        setLoading(false);
      });
  }

  function handleReg(values) {
    setLoading(true);
    post('/api/sys/oauth/advertiser/advertisers', values, {
      message: null,
    }).then(_ => {
      message.success('注册成功');
      handleChangeFormType('account');
    })
      .finally(_ => {
        setLoading(false);
      });
  }

  function handleChangeFormType(type) {
    setFormType(type);
    // this.props.form.resetFields();
  }
  function switchRePasswordForm() {
    handleChangeFormType('RFP')
  }

  function handleReFEmail(values) {
    setLoading(true);

    query('/api/pub/password/normal/sendResetEmail', values)
      .then(() => {
        message.success('重置邮件发送成功');
        if (values.email) {
          this.handleChangeFormType('account');
        }
      })
      .finally(_ => {
        setLoading(false);
      });
  }

  const MatchC = cType[formType];

  return <>
    <div
      id="loginBG"
      className={styles.loginBG}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
    </div>
    <div className={styles.formContainer}>
      <div className={styles.logo}>星鱼影城智慧云平台</div>

      <MatchC
        {...props}
        className={styles.Form}
        onSubmit={handleSubmit}
        onReg={handleReg}
        onRePW={switchRePasswordForm}
        onReFEmial={handleReFEmail}
        loading={loading}
      />

      <div className={styles.options}>
      </div>


      <div className={styles.regGuided}>
        {formType !== 'account' ? (
          <Button type="link" size="small"
            onClick={handleChangeFormType.bind(null, 'account')}
          >账号登录</Button>
        ) : null}
        {formType !== 'mailReg' ? (
          <Button type="link" size="small"
            onClick={handleChangeFormType.bind(null, 'mailReg')}
          >立即注册</Button>
        ) : null}
      </div>
    </div>
  </>
}

export default (props) => {
  return <Layout>
    <Content>
      <LoginForm />
    </Content>
  </Layout>
}