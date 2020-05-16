import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Router from "next/router";

const Form = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubit = (data) => {
    dispatch({
      type: "Submit",
      form: data,
    });
    Router.push("/profile");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card card-login">
              <form className="form" onSubmit={handleSubmit(onSubit)}>
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Register</h4>
                </div>
                <p className="description text-center">
                  Fill the form to complete your profile
                </p>
                <div className="card-body">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">face</i>
                      </span>
                    </div>

                    <input
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name..."
                      ref={register({ required: "Required", minLength: 3 })}
                    />
                    <small className="form-text text-danger">
                      {" "}
                      {errors.fullName &&
                        (errors.fullName.message ||
                          "Full name Must be minimum of 3 characters")}
                    </small>
                  </div>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">mail</i>
                      </span>
                    </div>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email..."
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    <small className="form-text text-danger">
                      {" "}
                      {errors.email && errors.email.message}
                    </small>
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">lock_outline</i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password..."
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}/,
                          message:
                            "the password needs to have at least a letter and a number with a minimum of 6 characters",
                        },
                      })}
                    />
                    <small className="form-text text-danger">
                      {" "}
                      {errors.password && errors.password.message}
                    </small>
                  </div>
                </div>
                <div className="form-check form-check-radio form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="inlineRadio1"
                      value="Male"
                      ref={register({})}
                    />{" "}
                    Male
                    <span className="circle">
                      <span className="check"></span>
                    </span>
                  </label>
                </div>
                <div className="form-check form-check-radio form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="inlineRadio2"
                      value="Female"
                      ref={register({})}
                    />{" "}
                    Female
                    <span className="circle">
                      <span className="check"></span>
                    </span>
                  </label>
                </div>
                <div className="footer text-center">
                  <input
                    className="btn btn-primary btn-link btn-wd btn-lg"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
