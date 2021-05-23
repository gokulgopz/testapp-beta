import React from "react"
import styled from "styled-components/native"


function Home({ navigation }) {
    return (
        <>

            <Paper>

                <Textarea>

                    Home
                </Textarea>

            </Paper>






        </>
    )
}

export default Home;

const Paper = styled.View`
    flex:1;
    background-color:black;
    height:150px;
    width:100%;
    align-items:center;




`;
const Textarea = styled.Text`
    color:black;
    font-size:59px;
    color:white;
    text-align:center;
    




`;
const Button = styled.Button`
    color:black;
    font-size:20px;
    color:white;
    border:1px solid grey;





`;
const Cards = styled.View`

    margin:15px;
    padding: 40px;
     
    color:grey;
    background: #fff;


`;
const Papers = styled.View`
   
    background-color:white;
    height:90px;
    padding:25px
    width:100%;
    align-items:center;
     
    justifyContent:space-between 



`;