import React from "react"
import styled from "styled-components/native"


function Aptitude() {
    return (
        <>

            <Paper>

                <Textarea>

                    Aptitude
                </Textarea>

            </Paper>






        </>
    )
}

export default Aptitude;

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




`;