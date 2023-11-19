import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from '../components/templatePage/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const ActorPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('actor', getActors)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const actors = data.results;

    return (
        <ActorListPageTemplate
            actors={actors}
        />
    )
}

export default ActorPage;