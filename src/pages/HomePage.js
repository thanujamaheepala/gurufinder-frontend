import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
  let [data, setData] = useState();
  let { authTokens, logoutUser } = useContext(AuthContext);

  let apiService = useAxios();

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await apiService.get("/api/auth/test/");

    if (response.status === 200) {
      setData(response.data);
    }
  };

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default HomePage;
