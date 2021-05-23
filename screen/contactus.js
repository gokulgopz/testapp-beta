import React from "react"
import styled from "styled-components/native"


function Contactus() {
    return (
        <>

            <Paper>

                <Textarea>

                    Contact us
                </Textarea>

            </Paper>






        </>
    )
}

export default Contactus;

const Paper = styled.View`
    flex:1;
    background-color:#1eae98;
    height:150px;
    width:100%;
    align-items:center;




`;
const Textarea = styled.Text`
   
    font-size:59px;
    color:white;




`;