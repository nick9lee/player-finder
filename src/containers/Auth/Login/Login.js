import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './Login.module.css';
import * as actions from '../../../store/actions/auth';

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

  onSubmitHandler = (event) => {
    event.preventDefault();

    // Try to log the user in
    this.props.auth.users.forEach(user => {
      if (this.state.formControls.email.value === user.Email && 
        this.state.formControls.password.value === user.Password) {
        // Update user in the state if authentication is successful
        this.props.authSuccess(user);
        return;
      }
    });

    // If unsuccessful, dispatch auth failed and clear fields
    const formControls = {
      ...this.state.formControls,
      email: {
        ...this.state.formControls.email,
        value: ''
      },
      password: {
        ...this.state.formControls.password,
        value: ''
      }
    }
    this.setState({formControls: formControls});
    this.props.authFail('Incorrect email or password');
  }

  componentDidMount() {
    if (this.props.auth.user === null) this.props.getUsers();
  };

  render() {
    return (
      <div className={styles.LoginContainer}>
        {
          this.props.auth.authFailed ? 
          <p className={styles.AuthFailed}>{this.props.auth.errMsg}</p> : null
        }
        <h1>Login</h1>
        <form className={styles.Form} onSubmit={this.onSubmitHandler}>
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

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(actions.getUsers()),
    authSuccess: user => dispatch(actions.authSuccess(user)),
    authFail: msg => dispatch(actions.authFail(msg))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);