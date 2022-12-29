import React from "react";
import * as Styles from './styles'

const HomePage = () =>{
    return(
        <><Styles.Wrapper>
            <Styles.SubWrapper>
                <Styles.Header>Products</Styles.Header>
                <Styles.Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Styles.Content>
            </Styles.SubWrapper>

            <Styles.SubWrapper>
                <Styles.Header>Products</Styles.Header>
                <Styles.Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Styles.Content>
            </Styles.SubWrapper>

            <Styles.SubWrapper>
                <Styles.Header>Products</Styles.Header>
                <Styles.Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Styles.Content>
            </Styles.SubWrapper>
        </Styles.Wrapper>
        <Styles.CakeBox>
            <div>
                <img src="pastry-website\public\black-current.jpg" />
            </div>
            <div>
                <img src="pastry-website\public\black-current.jpg" />
            </div>
            <div>
                <img src="pastry-website\public\black-current.jpg" />
            </div>
            <div>
                <img src="pastry-website\public\black-current.jpg" />
            </div>
        </Styles.CakeBox>
        </>
    )
}

export default HomePage;