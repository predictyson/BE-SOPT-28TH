import React from "react";
import Styled from "styled-components";
import {withRouter} from "react-router-dom";
import CardHeader from "./CardHeader";

const CardWrap = Styled.div`
width: 785px;
height: 600px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
margin: 0 auto;
`;

const Card = ({data, match}) => {
    const isReadOnly = match.path === "/diary/:id" ? true : false;
    const { title, date, image, weather, tags, summary, text } =data;

    return (
        <CardWrap>
            <CardHeader title={title} isReadOnly={isReadOnly} />
            <p>{date}</p>
            <img src={image} width="200" alt=""/>
            <p>{weather}</p>
            <p>{summary}</p>
            <p>{text}</p>
        </CardWrap>
    );
};

export default withRouter(Card);