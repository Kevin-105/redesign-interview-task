import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, SITE_URL } from "../Common/Constants";

import axios from 'axios';

import News_Detail from '../Components/News_Detail';

const News = () => {

    const { filter } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNewsId(filter || 'topstories', 0, 25).then(list => {
            getNewsDetail(list)?.then(item =>

                formatNewsData(item, () => {
                    setIsLoading(false);
                })
            );
        });
    }, [filter])

    const formatNewsData = (item, next) => {
        setNewsList(item);
        next();
    };

    const getNewsId = async function(category, start, end) {
        const Emty_Array = [];
        try {
            const { data } = await axios.get(
                `${API_URL}/${category}.json?print=pretty`
            );
            data.slice(start, end).map(item => Emty_Array.push(item));
        } catch (error) {
            //setOpen(true);
            setIsLoading(false);
            return error;
        }
        return Emty_Array;
    }

    const getNewsDetail = async function(list)  {

        const newsList = list?.map(async news => {
            const { data } = await axios.get(
              `${API_URL}/item/${news}.json?print=pretty`
            );
            return {
              news,
              text: data?.text,
              author: data?.by,
              title: data?.title,
              score: data?.score,
              comments_count: data?.descendants,
              time: data?.time,
              url: data?.url ? data?.url : `${SITE_URL}/item?id=${news}`
            };
          });

          return await Promise.all(newsList);
    }



    return (
        <React.Fragment>
            <News_Detail NewsList={newsList} />
        </React.Fragment>
    );
};

export default News;