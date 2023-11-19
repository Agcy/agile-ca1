import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../../movie/headerMovieList";
import ActorList from "../../actor/actorList";

function ActorListPageTemplate({actors}) {
    return (
        <Grid container sx={{ padding: '20px' }}>
            <Grid item xs={12}>
                <Header title="Popular People" />
            </Grid>
            <Grid item container spacing={5}>
                <ActorList actors={actors}></ActorList>
            </Grid>
        </Grid>
    );
}

export default ActorListPageTemplate;