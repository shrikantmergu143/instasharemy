import {useState,useEffect} from "react"
import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import firebase from "firebase";
import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(() => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  const [state,setState] = useState(false);
  const [load,setLaod] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location.href="/Login";
        setState(false)
        setLaod(true)
      } else {
        window.location.href="/dashboards/index";
        setState(true);
        setLaod(true)
      }
    })
  }, []);
    return (
      <OverviewWrapper>
        <div style={{display:'flex',flexDirection:"row",justifyContent:'center',alignItems:"center",position:"fixed",height:"100%",width:"100%"}}>
            <i className={"fa fa-instagram"} style={{fontSize:60,color:"red"}} />
        </div>
      </OverviewWrapper>
    );
  // return (
  //   <OverviewWrapper>
  //     <Helmet>
  //       <title>Tokyo Free White React Javascript Admin Dashboard</title>
  //     </Helmet>
  //     <Container maxWidth="lg">
  //       <Box display="flex" justifyContent="center" py={5} alignItems="center">
  //         <Logo />
  //       </Box>
  //       <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
  //         <Hero />
  //       </Card>
  //     </Container>
  //   </OverviewWrapper>
  // );
}

export default Overview;
