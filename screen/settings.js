import React from "react"
import styled from "styled-components/native"


function settings() {
    return (
        <>

            <Paper>

                <Textarea>

                    settings         
                    
                    
                </Textarea>

            </Paper>






        </>
    )
}

export default settings;

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