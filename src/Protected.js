
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {


  const { Component, check } = props;
  const navigate = useNavigate();
  const isLogin = localStorage.getItem(check)

  useEffect(() => {
    console.log(isLogin, check)
    alert('oy')
    if (isLogin) {
      alert('hello')
      navigate('/')
    }

  }, [])


  return (
    <>

      <Component />

    </>
  );
}

export default Protected;
