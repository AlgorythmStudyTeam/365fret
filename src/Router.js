import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signInPage";
import SignedPages from "./components/signedpages";
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Fragment } from "react";
import Navigation from "./components/navigation/navigation";
import { UserID } from "./components/recoil";
import Setting from "./components/signedPages/settingPage/settingPage";
import OutputPage from "./components/signedPages/schedulerPage/outputPage";
import InputPage from "./components/signedPages/schedulerPage/inputPage";
import MyPage from "./components/signedPages/myPage/myPage";
import Test from "./components/signedPages/testPage";
import Copyright from "./modules/copyright";

function Router() {
  const ID = useRecoilValue(UserID)
  console.log(ID) // test
  return (
    <TempTheme>
      <BrowserRouter>
        {
          ID !== -1
            ?
            <Header><Navigation /></Header>
            :
            <Fragment />
        }
        <Body>
          <Routes>
            <Route path = "/" element={<SignIn />} />
            <Route path = "/main" element={<SignedPages />} />
            <Route path = "/main/schedule/output" element={<OutputPage />} />
            <Route path = "/main/schedule/input" element={<InputPage />} />
            <Route path = "/main/setting" element={<Setting />} />
            <Route path = "/main/profile" element={<MyPage />} />
            <Route path = "/test" element={<Test />} />
          </Routes>
          <Copyright sx={{ mt: 8, mb: 4 }}/>
        </Body>
      </BrowserRouter>
    </TempTheme>
  )
}

const TempTheme = styled.div`
  font-family: NanumGothic;
`

const Body = styled.div`
  padding-top:77px;
  z-index:10;
`

const Header = styled.div`
  width:100%;
  position:fixed;
  background-color: #324182;
  height:77px;
  z-index:20;
`

export default Router;
