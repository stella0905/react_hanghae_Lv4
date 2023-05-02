import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
background-color:${(props) => {
    switch (props.type) {
      case 'blue':
        return '#A0C3D2'
      case 'red':
        return '#EAC7C7'
      default:
        return 'transparent'
    }
  }};
border:1px solid #222222;
border-radius:10px;
box-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);
width: ${(props) => (props.size === "M" ? '300px' : '100px')};
padding:10px;
margin:5px;
position:${(props) => {
    return props.gps === "header" ? 'absolute' : 'none'
  }};
top:${(props) => props.top};
bottom:${(props) => props.bottom};
left:${(props) => props.left};
right:${(props) => props.right};
`
export const explain = styled.div`
color:gray;
font-size:15px;
`

export const Header = styled.header`
background-color:#EAE0DA;
height:80px;
text-align:center;
font-size:30px;
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
position:relative;
border-bottom:1px solid gray;
`
export const BackPage = styled.button`
position:absolute;
left:0;
`

export const Title = styled.h1`
margin:auto;
`

export const Main = styled.div`
background-color:#F7F5EB;
height:100vh;
display:flex;
align-items:center;
flex-direction:column;
position:relative;
`

export const ModalOverlay = styled.div`
width:100vw;
height:100vh;
top:0;
left:0;
right:0;
bottom:0;
position:fixed;
background-color:rgba(49,49,49,0.8);
z-index:10;
`

export const ModalContent = styled.div`
position:relative;
top:40%;
left:50%;
transform:translate(-50%,-50%);
background-color: #F7F5EB;
padding: 14px;
border-radius:3px;
max-width:600px;
min-width:300px;
height:650px;
width:600px;
z-index:9;
`
export const ModalButton = styled.div`
position:absolute;
bottom:6%;
left:32%;
display:flex;
gap:10px;
`
export const Content = styled.form`
padding:20px;
display:flex;
flex-direction:column;
font-size:13px;
color:gray;
`
export const InputTitle = styled.input`
padding:10px;
font-size:${(props) => (props.size)};
margin-bottom:30px;
width:${(props) => {
    switch (props.type) {
      case 'login':
        return '300px';
      default:
        return;
    }
  }};
  background-color:${(props) => props.type === 'login' ? 'transparent' : 'none'};
  border:none;
  border-bottom:1px solid black;
  &:focus {outline:none;}
`
export const InputContent = styled.textarea`
padding:10px;
height:${(props) => (props.size === 's' ? '360px' : '560px')};
&:focus {outline:none;}
border:none;
border-bottom:1px solid black;
`
export const InputPassword = styled.input`
padding:10px;
margin-top:10px;
margin-bottom:15px;
width:200px;
`
export const ThreadNumber = styled.div`
width:50px;
padding:8px;
text-align:center;
`
export const ThreadDate = styled.div`
width:150px;
padding:8px;
text-align:center;
`
//Thread
export const ListBox = styled.table`
padding:5px;
display:flex;
flex-direction:row;
width:730px;
border-bottom:1px solid gray;
`
export const DetailLink = styled(Link)`
  text-decoration:none;
  color:black;
  font-size:18px;
  width:500px;
  padding:8px;
  text-align:center;
`
export const buttonHandler = styled.div`
margin-top:20px;
`
export const ThreadContainer = styled.section`
margin-top:20px;
`
//Detail
export const DetailEntire = styled.main`
background-color: #F7F5EB;
height:100vh;
display:flex;
align-items:center;
flex-direction:column;
`
export const Form = styled.form`
padding-top:30px;
display:flex;
flex-direction:column;
width:700px;
`
export const DetailMain = styled.main`
margin-top:20px;
display:flex;
flex-direction:column;
width:700px;
height:900px;
border:1px solid gray; 
position:relative;
`
export const DetailEditMain = styled.main`
margin-bottom:30px;
margin-left:20px;
margin-right:20px;
height:900px;
position:relative;
`
export const DetailH1 = styled.h1`
margin-top:50px;
margin-bottom:20px;
margin-left:20px;
margin-right:20px;
font-size:30px;
padding:20px;
border-bottom:1px solid gray;
`
export const DetailContent = styled.div`
margin-bottom:30px;
margin-left:20px;
margin-right:20px;
font-size:20px;
height:550px;
padding:20px;
border-bottom:1px solid gray;
//줄바꿈 
white-space:pre-line;
`
export const ButtonContainer = styled.div`
position:absolute;
bottom:8%;
left:35%;
`
export const Date = styled.div`
position:absolute;
top:4%;
left:5%;
font-size:13px;
`

//Home
export const HomeContainer = styled.section`
display:flex;
justify-content:center;
margin-top:300px;
font-weight:600;
font-size:30px;
`
export const HomeTextLink = styled(Link)`
  text-decoration:none;
  color:black;
`
export const HomeMain = styled.main`
background-color: #F7F5EB;
height:100vh;
`
//Login
export const Login = styled.h1`
font-size:40px;
padding:20px;
margin-top:80px;
font-weight:600;
`
export const WarningMessage = styled.div`
color:red;
`