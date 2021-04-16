import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './Signup.module.css';
import * as actions from '../../../store/actions/auth';

class Signup extends Component {
  state = {
    formControls: {
      text: {
        firstName: {
          type: 'text',
          placeholder: 'First Name',
          value: ''
        },
        lastName: {
          type: 'text',
          placeholder: 'Last Name',
          value: ''
        },
        email: {
          type: 'text',
          placeholder: 'Email',
          value: ''
        },
        password: {
          type: 'password',
          placeholder: 'Password',
          value: ''
        },
        address: {
          type: 'text',
          placeholder: 'address',
          value: ''
        },
      },
      radio: {
        Male: {
          type: 'radio',
          name: 'gender',
          value: 'Male'
        },
        Female: {
          type: 'radio',
          name: 'gender',
          value: 'Female'
        }
      }
    },
    gender: ''
  }

  onSubmitHandler = event => {
    event.preventDefault();
    const data = {
      Fname: this.state.formControls.text.firstName.value,
      Lname: this.state.formControls.text.lastName.value,
      Addr: this.state.formControls.text.address.value,
      Email: this.state.formControls.text.email.value,
      Password: this.state.formControls.text.password.value,
      Gender: this.state.gender
    };
    this.props.signup(data);
    this.props.setUser(data);
    this.props.history.push({pathname: '/user'});
  }

  textOnChangeHandler = (event, key) => {
    const updatedControls = {...this.state.formControls};
    const updatedText = {...this.state.formControls.text};
    updatedText[key] = {
      ...this.state.formControls.text[key],
      value: event.target.value
    };
    updatedControls.text = updatedText;
    this.setState({formControls: updatedControls});
  }

  radioOnChangeHandler = (event) => {
    this.setState({gender: event.target.value});
  }

  render() {
    return (
      <div className={styles.SignupContaienr}>
        <h1>Signup</h1>
        <form autoComplete='off' onSubmit={this.onSubmitHandler}>
          <div className={styles.FormGroup}>
            {
              Object.entries(
                this.state.formControls.text
              ).map(([key, val]) => {
                return <input
                  key={key}
                  type={val.type}
                  value={val.value}
                  onChange={event => this.textOnChangeHandler(event, key)}
                  placeholder={val.placeholder}
                  className={styles.Input}
                  required
                />
              })
            }
            {
              Object.entries(
                this.state.formControls.radio
              ).map(([key, val]) => {
                return <div key={key} className={styles.RadioGroup}>
                  <input
                  type={val.type}
                  value={val.value}
                  name={val.name}
                  id={val.value}
                  onChange={this.radioOnChangeHandler}
                  className={styles.Radio}
                  required
                />
                <label htmlFor={val.value} className={styles.RadioLabel}>{val.value}</label>
                </div>
              })
            }
            <button className={styles.SubmitBtn}>Signup</button>
            <p className={styles.Login}><Link to='/login'>Already have an account? Login</Link></p>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: data => dispatch(actions.signup(data)),
    setUser: user => dispatch(actions.setUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Signup);