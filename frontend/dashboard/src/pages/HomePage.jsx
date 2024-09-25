import { Button } from "@/components/ui/button";
import { clearAllUserErrors, logout } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const { message, error } = useDispatch((state) => state.user);
  // // const navigateTo = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearAllUserErrors());
  //   }
  //   if (message) {
  //     toast.success(message);
  //   }
  // }, [message, dispatch, error]);
  return (
    <div>
      {/* <Button onClick={handleLogout}>Logout</Button> */}
      HomePage
    </div>
  );
};

export default HomePage;
