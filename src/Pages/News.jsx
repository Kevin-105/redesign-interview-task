import React, { useEffect, useState } from 'react';
import { Alert, Button, Snackbar } from "@mui/material";
import { useParams } from 'react-router-dom';
import { API_URL, SITE_URL } from "../Common/Constants";
import Loader from '../Common/Loader';
import axios from 'axios';
import NewsDetail from '../Components/News_Detail';

/**
 *This is main page, with all resources
 */

const News = () => {

    const { filter } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [newsList, setNewsList] = useState([]);
    const [count, setCount] = useState(25);
    const [showError, setShowError] = useState(false);

    // This Effect called when user change category from header, 
    useEffect(() => {
        setIsLoading(true);
        getNewsId(filter || 'topstories', 0, 25).then(list => {
            getNewsDetail(list)?.then(item =>
                formatNewsData(item, () => {
                    setIsLoading(false);
                })
            );
        });
    }, [filter])

    // For Display next bunch of record, I called it on more click with new counter
    const showMore = () => {
        setIsLoading(true);
        getNewsId(filter || 'topstories', count, count + 25).then(arr => {
            getNewsDetail(arr)?.then(item =>
                formatNewsData(item, () => {
                    setCount(count + 20);
                    setIsLoading(false);
                    window.scrollTo(0, 0);
                })
            );
        });
    };

    // Just group all data together
    const formatNewsData = (item, next) => {
        setNewsList(item);
        next();
    };

    // For get News list with only Ids
    const getNewsId = async function (category, start, end) {
        const Emty_Array = [];
        try {
            const { data } = await axios.get(`${API_URL}/${category}.json?print=pretty`);
            data.slice(start, end).map(item => Emty_Array.push(item));
        } catch (error) {
            setIsLoading(false);
            setShowError(true);
            return error;
        }
        return Emty_Array;
    }

    // For get Details from News Id
    const getNewsDetail = async function (list) {
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
            {isLoading ? <Loader /> :
                <>
                    <NewsDetail NewsList={newsList} />
                    <span className="btn-more">
                        <Button onClick={() => showMore()} variant="outlined">More</Button>
                    </span>
                    <Snackbar open={showError} autoHideDuration={3000} onClose={() => setShowError(true)}>
                        <Alert severity="error" onClose={() => setShowError(false)}>We hit the snag while loading you!</Alert>
                    </Snackbar>
                </>
            }
        </React.Fragment>
    );
};

export default News;