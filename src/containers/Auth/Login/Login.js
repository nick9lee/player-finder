import React, {Component} from 'react';

import styles from './Login.module.css';

class Login extends Component {
  state = {
    formControls: {
      email: {
        type: 'text',
        placeholder: 'Email',
        value: ''
      },
      password: {
        type: 'password',
        placeholder: 'Password',
        value: ''
      }
    }
  };

  onChangeHandler = (event, key) => {
    const updatedControls = {...this.state.formControls};
    const newControl = {
      ...this.state.formControls[key],
      value: event.target.value
    }
    updatedControls[key] = newControl;
    this.setState({formControls: updatedControls});
  };

  render() {
    return (
      <div className={styles.LoginContainer}>
        <h1>Login</h1>
        <form className={styles.Form}>
          <div className={styles.FormGroup}>
            {
              Object.entries(
                this.state.formControls
              ).map(([key, val]) => {
                return <input
                  key={key}
                  type={val.type}
                  value={val.value}
                  onChange={event => this.onChangeHandler(event, key)}
                  className={styles.Input}
                  placeholder={val.placeholder}
                />
              })
            }
          </div>
          <button className={styles.SubmitBtn}>Login</button>
        </form>
      </div>
    );
  };
}

export default Login;