import React from 'react';
import { AppBar, Container, Toolbar } from "@mui/material"

const Footer = () => {
    return (
        <React.Fragment>
            <AppBar position="static" style={{ backgroundColor: "gainsboro" }}>
                <Container maxWidth="md">
                    <Toolbar variant="dense">
                        <span className="btn-more font-color">
                            © 2022 Kevin Itailya
                        </span>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
};

export default Footer;