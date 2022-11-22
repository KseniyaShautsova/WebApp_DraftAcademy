import Head from "next/head";
import { Fragment } from "react";

import { NextPageWithLayout } from "~/types/common.types";
import playlistData from "~/data/playListData.json"
import Main from "../views/Main/Main.view"

import {Container, Layout} from "~/components";
import { PlayListModelWithId } from "~/models/playlist.model";


const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main items={playlistData as Array<PlayListModelWithId>} />
      </Container>
    </Fragment>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
