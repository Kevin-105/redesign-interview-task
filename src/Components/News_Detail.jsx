import React from 'react';
import { Link, Paper, Table, TableCell, TableContainer, TableRow } from "@mui/material";
import timeago from "epoch-timeago";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { SITE_URL } from "./../Common/Constants";

const News_Detail = ({NewsList}) => {

    const Create_URL = (url) => {
        return url?.replace("http://", "")?.replace("https://", "")?.split(/[/?#]/)[0]?.replace("www.", "")
    }

    return (
       <React.Fragment>
           <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                {NewsList?.map(
                    ({ news, text, author, title, score, comments_count, time, url }, index) => (
                        <TableRow key={news} sx={{ '&:last-child td': { border: 0 } }}>
                            <TableCell >
                                <div className="d_flex">
                                    <span>{ index + 1 }.</span>
                                    <span>
                                        <ArrowDropUpIcon fontSize="large" />
                                    </span>
                                </div>
                            </TableCell>

                            <TableCell >
                                <TableRow>
                                    <span style={{ color: "#828282" }} className="d_i_flex">
                                        <Link underline="none" href={url} target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                        <Link className="cp p-l-5">
                                            ( {Create_URL(url)} )
                                        </Link>
                                    </span>  
                                </TableRow>
                                <TableRow>
                                        <span className="cp">{score || 0} points | by </span>
                                        <Link color='inherit' underline="none" href={`${SITE_URL}/user?id=${author}`} target="_blank" rel="noopener noreferrer" >
                                            {author} |
                                        </Link>
                                        { console.log('news:::', news) }
                                        <Link underline="none" className="p-l-5" href={`${SITE_URL}/item?id=${news}`} target="_blank" style={{ color: "#828282" }} rel="noopener noreferrer" >
                                            {comments_count || 0} comments
                                        </Link>
                                </TableRow>
                            </TableCell>

                            <TableCell style={{ color: "#828282" }}>
                                <span className='d_flex'> <p className="p-r-5">{timeago(time * 1000)}</p> </span>
                            </TableCell>
                        </TableRow>
                    )
                )}
            </Table>
        </TableContainer>
       </React.Fragment>
    );
};

export default News_Detail;