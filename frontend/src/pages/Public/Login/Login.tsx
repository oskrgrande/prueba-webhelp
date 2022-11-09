import { useForm } from "@/hooks/useForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginVariables, PrivateRoutes, PublicRoutes } from "@/models";
import { createUser, resetUser, UserKey } from "@/redux/slice/user";
import { getUser } from "@/services";
import { clearLocalStorage } from "@/utilities";

function Login() {
  const { values, handleInputChange, setValue } = useForm(loginVariables);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser());
    // navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);


  const login = async () => {
    try {
      const result = await getUser();
      console.log(result, 'ok');
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (err) { }
  };

  return (
       <>hola</>
  )
}
export default Login