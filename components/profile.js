import React from "react";
import { connect, useDispatch } from "react-redux";

const Profile = ({ form }) => {
  const dispatch = useDispatch();

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const gender = () => {
    if (form.gender == "Male") {
      return (
        <img
          src="../assets/img/faces/christian.jpg"
          alt="Circle Image"
          className="img-raised rounded-circle img-fluid"
        />
      );
    } else {
      return (
        <img
          src="../assets/img/faces/card-profile5-square.jpg"
          alt="Circle Image"
          className="img-raised rounded-circle img-fluid"
        />
      );
    }
  };
  return (
    <div className="main main-raised">
      <div className="profile-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="profile">
                <div className="avatar">{gender()}</div>
                <div className="name">
                  <h3 className="title">{form.fullName}</h3>
                  <small>{form.gender}</small>
                  <h6>{form.email}</h6>
                  <a
                    href="#"
                    className="btn btn-just-icon btn-link btn-dribbble"
                  >
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-just-icon btn-link btn-twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-just-icon btn-link btn-pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="description text-center">
            <p>
              Thank you for registring this is your password {form.password}. If
              you want to rest your profile click the button below
            </p>
          </div>
        </div>
        <br />
        <a
          onClick={() => reset()}
          type="button"
          className="btn btn-primary btn-link btn-wd btn-lg"
        >
          {" "}
          Rest Profile
        </a>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { form } = state;
  return { form };
}

export default connect(mapStateToProps)(Profile);
