import React from "react";
import { ReCaptcha, Input, Textarea, Button } from "react-rainbow-components";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SuccessModal from "./SuccessModal";
import { Text } from "./Multilanguage/Text";

const formID = process.env.REACT_APP_FORM_ID;

//React-Rainbow-Component adjusted to personal needs
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: undefined,
      userNameError: undefined,
      email: undefined,
      emailError: undefined,
      message: undefined,
      messageError: undefined,
      recaptcha: undefined,
      recaptchaError: undefined,
      showModal: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleReCaptchaSuccess = this.handleReCaptchaSuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reCaptchaRef = React.createRef();
  }

  handleUserNameChange(event) {
    const userName = event.target.value;
    let error;
    if (userName === undefined || userName === "") {
      error = <Text tid="nameRequired" />;
    }
    this.setState({ userName: event.target.value, userNameError: error });
  }

  handleEmailChange(event) {
    const email = event.target.value;
    let error;
    if (email === undefined || email === "") {
      error = <Text tid="emailRequired" />;
    }
    this.setState({ email: event.target.value, emailError: error });
  }

  handleMessageChange(event) {
    const message = event.target.value;
    let error;
    if (message === undefined || message === "") {
      error = <Text tid="messageRequired" />;
    }
    this.setState({ message: event.target.value, messageError: error });
  }

  handleReCaptchaSuccess(token) {
    let error;
    if (token === undefined) {
      error = <Text tid="captchaRequired" />;
    }
    this.setState({ recaptcha: token, recaptchaError: error });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://formspree.io/f/${formID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(function (response) {
        console.log(response);
      })
      .then(() => this.setState({ showModal: true }))
      .then(() =>
        setTimeout(
          function () {
            this.setState({ showModal: false });
          }.bind(this),
          5000
        )
      )
      .catch(function (error) {
        console.error(error);
      });

    const error = {
      userNameError: undefined,
      emailError: undefined,
      messageError: undefined,
      recaptchaError: undefined,
    };
    let reload = false;
    const { userName, email, message, recaptcha } = this.state;
    if (userName === undefined || userName === "") {
      error.userNameError = <Text tid="nameRequired" />;
      reload = true;
    }
    if (email === undefined || email === "") {
      error.emailError = <Text tid="emailRequired" />;
      reload = true;
    }
    if (message === undefined || message === "") {
      error.messageError = <Text tid="messageRequired" />;
      reload = true;
    }
    if (recaptcha === undefined) {
      error.recaptchaError = <Text tid="captchaRequired" />;
      reload = true;
    }
    if (reload) {
      this.setState({ ...error });
    } else {
      this.reCaptchaRef.current.reset();
    }
  }

  render() {
    const {
      userName,
      userNameError,
      email,
      emailError,
      message,
      messageError,
      recaptchaError,
      showModal,
    } = this.state;

    const RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    return (
      <>
        {showModal ? <SuccessModal /> : null}
        <div className="flex h-screen">
          <div className="w-full md:w-2/3 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <h1 className="mb-16 text-blue-400 text-center text-3xl uppercase font-semibold">
                <Text tid="contactMe" />
              </h1>
              <div className="flex flex-row justify-center mx-16 mb-8">
                <Input
                  className="mr-4 w-1/2"
                  label="Name"
                  placeholder="Enter your name"
                  value={userName}
                  error={userNameError}
                  onChange={this.handleUserNameChange}
                  icon={<FaUser className="text-blue-400" />}
                />
                <Input
                  className="ml-4 w-1/2"
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  error={emailError}
                  onChange={this.handleEmailChange}
                  icon={<MdEmail className="text-blue-400" />}
                />
              </div>
              <Textarea
                className="mx-16"
                label={<Text tid="message" />}
                placeholder="Enter a message"
                value={message}
                error={messageError}
                onChange={this.handleMessageChange}
              />
              <div className="mx-16 mt-8 flex flex-col items-center">
                <ReCaptcha
                  siteKey={RECAPTCHA_APIKEY}
                  ref={this.reCaptchaRef}
                  error={recaptchaError}
                  onChange={this.handleReCaptchaSuccess}
                />
                <Button
                  className="h-10 mt-8"
                  label={<Text tid="send" />}
                  variant="brand"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default ContactForm;
