import {GlobalStyle} from "./globalstyles"
import styled from "styled-components"
import {VscGithub} from "react-icons/vsc"

const Page = styled.div`
    margin: 100px 400px;
`
const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-right: 40px;
`

const Title = styled.h1`
    font-size: 2rem;
    align-self: flex-end;
`

const Text = styled.text`
`

const IcoContainer = styled.div`
    align-self: flex-start;
    
`

const GithubIco = styled(VscGithub)`
    font-size: 2rem;
    color: black;
`
const Section = styled.div`
    margin-left: 40px;
`

const SubTitle = styled.h2`
    font-size: 1.1rem;
    margin-bottom: 10px;
`

const BodyContainer = styled.div`
    padding-right: 400px;
`

const App = () => {
    return (
        <Page>
            <GlobalStyle />
            <HeaderContainer>
                <Title>Lewis Ward</Title>
                <IcoContainer>
                    <a href="http://www.github.com/Lewisjohnward" target="_blank">
                    <GithubIco />
                    </a>
                </IcoContainer>
            </HeaderContainer>
            <BodyContainer>
                <Section>
                <SubTitle>About</SubTitle>
                <Text> A self-taught Front End Developer with experience building Vanilla and React.js websites. With a background in both UI/UX and low-level programming, I can develop websites from scratch and raise them into modern, responsive, user-friendly, and dependable web experiences.</Text>
                </Section>
            </BodyContainer>
        </Page>
    )
}

export default App
