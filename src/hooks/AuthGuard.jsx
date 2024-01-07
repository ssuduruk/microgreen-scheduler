import { useEffect } from "react";
import { useNavigate } from "react-router"

export const useAuthGuard = (isLoggedIn) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
}