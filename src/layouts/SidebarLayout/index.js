import React , { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import firebase from "firebase";

import Sidebar from './Sidebar';
import Header from './Header';

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const SidebarLayout = () => {
  const [state,setState] = useState(false);
  const [load,setLaod] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        //window.location.href="/Login";
        setState(false)
        setTimeout(()=>{
          setLaod(true)
        },2200)

      } else {
        setState(true);
        setTimeout(()=>{
          setLaod(true)
        },2200)
      }
    })
  }, []);
  if(!load){
    return (
      <div style={{display:'flex',flexDirection:"column",justifyContent:'space-between',alignItems:"center",position:"fixed",height:"100%",width:"100%"}}>
        <div></div>
        <div style={{display:'flex',flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>  
          <i className={"fa fa-instagram"} style={{fontSize:40,marginRight:20}} /> 
          <div className={"font m-2 instagram"} style={{fontSize:35}}>InstaShare</div>
        </div>
        <div style={{textAlign:"center"}}>
          <div>from</div>
          <div>Facebook</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainWrapper>
    </>
  );
};

export default SidebarLayout;
