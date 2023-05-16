/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    const navigate = useNavigate()
  if (!isLoggedIn) {
    navigate("/")
    return
  }
  return children;
};
export default Protected;
