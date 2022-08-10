import {GlobalStyle} from "./globalstyles"
import styled from "styled-components"
import {VscGithub} from "react-icons/vsc"
import {Javascript, C, Html, CSS} from "./assets/icos/Icos"
import express from "./assets/icos/express.png"
import mongo from "./assets/icos/mongo.png"
import node from "./assets/icos/node.png"
import react from "./assets/icos/react.png"

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

const Text = styled.p`
    margin-bottom: 50px;
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

const TechContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    * {
        padding: 5px;
    }

`
const Img = styled.img`
    width: 70px;
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
                    <SubTitle>Technologies</SubTitle>
                    <TechContainer>
                        <Javascript />
                        <C />
                        <CSS />
                        <Html />
                        <Img src={express} />
                        <Img src={react} />
                        <Img src={node} />
                        <Img src={mongo} />
                    </TechContainer>
                    <SubTitle>Projects</SubTitle>
                </Section>
            </BodyContainer>
        </Page>
    )
}

export default App
