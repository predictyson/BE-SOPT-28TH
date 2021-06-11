import React from 'react';
import Card from "../components/main/Card";
import Styled from "styled-components";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = () => {
    const [userData, setUserData] = React.useState({
        id:1,
        date: 20210611, 
        title: "diary title",
        image: "",
        weather: "clear",
        tags: ["tag1", "tag2"],
        });

        return (
            <MainWrap>
                <Card props={userData}/>;
            </MainWrap>
    );
};

export default Main;