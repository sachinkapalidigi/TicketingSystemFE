import { useEffect, useState } from "react";
import { getAuthToken } from "../utils/apis/localStore";

const useUserLogin = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    setIsUserLoggedIn(Boolean(token));
  }, []);

  return {
    isUserLoggedIn,
  };
};

export default useUserLogin;
