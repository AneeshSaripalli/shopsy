import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer/Footer";
async function load() {
    const result = await import('wasm');

    result.start_websocket();
}
load();

const Home = () => {
    return <Layout header={<Header />} footer={<Footer />} >
        <div></div>
    </Layout>
}

export default Home;