import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {

    const { filter } = useParams()

    return (
        <div>
            <span>dfsdfsdf</span>Hello From News-Home
        </div>
    );
};

export default News;