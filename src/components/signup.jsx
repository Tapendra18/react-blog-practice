import { Link, useNavigate } from "react-router-dom";
import CommonInput from "../common/commonInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/UserSlice";

const SignUp = () => {
  const [inputvalue, setInputValue] = useState({});
  const [images, setImageUpload] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfile = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      const data = new FormData();
      data.append("first_name", inputvalue.first_name);
      data.append("last_name", inputvalue.last_name);
      data.append("email", inputvalue.email);
      data.append("city", inputvalue.city);
      data.append("phone", inputvalue.phone);
      data.append("profile_image", images);

      await dispatch(signUp(data));

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      setLoading(false);
    }
    setLoading(false);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!inputvalue.first_name) {
      newErrors.first_name = "First name is required";
      valid = false;
    }

    if (!inputvalue.last_name) {
      newErrors.last_name = "Last name is required";
      valid = false;
    }

    if (!inputvalue.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputvalue.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!inputvalue.city) {
      newErrors.city = "City is required";
      valid = false;
    }

    if (!inputvalue.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(inputvalue.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!images) {
      newErrors.profile_image = "Profile image is required";
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  return (
    <>
      <div>
        <div className="flex h-35 justify-between p-3 bg-[#F7F7F8]">
          <div className="flex items-center">
            <Link to={"/"}>
              <h6 className="text-sm text-gray-600 cursor-pointer">Gravity</h6>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-slate-500 text-sm">
              Already have an account? Click here?
            </h6>
            <Link to="/login">
              <button className="bg-[#7b68ee] p-2 rounded-md text-white hover:bg-[#5f48ea]">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "calc(100vh - 65px)",
            backgroundImage:
              "-webkit-linear-gradient(top left, #a802e0, #f7676a)",
          }}
        >
          <div className="signup-box-style">
            <h6 className="text-xl font-semibold text-center">
              Seconds to sign up!
            </h6>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  First Name
                </label>
                <CommonInput
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChangeValue={handleChangeValue}
                />
                {error.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {error.first_name}
                  </p>
                )}
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Last Name
                </label>
                <CommonInput
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChangeValue={handleChangeValue}
                />
                {error.last_name && (
                  <p className="text-red-500 text-xs mt-1">{error.last_name}</p>
                )}
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Work Email
                </label>
                <CommonInput
                  type="text"
                  placeholder="Enter your work email"
                  name="email"
                  onChangeValue={handleChangeValue}
                />
                {error.email && (
                  <p className="text-red-500 text-xs mt-1">{error.email}</p>
                )}
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  City
                </label>
                <CommonInput
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  onChangeValue={handleChangeValue}
                />
                {error.city && (
                  <p className="text-red-500 text-xs mt-1">{error.city}</p>
                )}
              </div>
              <div className="flex gap-2 flex-col">
                <label className="text-xs" htmlFor="">
                  Phone
                </label>
                <CommonInput
                  type="text"
                  placeholder="Enter Your phone"
                  name="phone"
                  onChangeValue={handleChangeValue}
                />
                {error.phone && (
                  <p className="text-red-500 text-xs mt-1">{error.phone}</p>
                )}
              </div>
              <div className="flex gap-2 flex-col ">
                <label className="text-xs" htmlFor="profile_image">
                  Profile Image
                </label>
                <CommonInput
                  type="file"
                  name="profile_image"
                  onChangeValue={handleProfile}
                />
                {error.profile_image && (
                  <p className="text-red-500 text-xs mt-1">
                    {error.profile_image}
                  </p>
                )}
              </div>
            </div>
            <button
              className="bg-[#7b68ee] p-2 rounded-md text-white w-full hover:bg-[#5f48ea]"
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? <>loading...</> : <>Sign Up</>}
            </button>
            <h6
              className="text-xs text-[#7b68ee] cursor-pointer"
              style={{
                margin: "auto",
              }}
            >
              or SignUp with Google
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
