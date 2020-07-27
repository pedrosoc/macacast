import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import routes from "@/constants/routes";

import PodcastCardInfo from "./PodcastCardInfo";
import PodcastCardImage from "./PodcastCardImage";

const PodcastCard = ({ className, podcast, spotlight }) => {
	if (!podcast)
		return <Fragment />

	const url = routes.podcastDetails.urlFor(podcast.id);

	return (
		<NavLink to={url} className={className}>
			<PodcastCardImage spotlight={spotlight} src={podcast.img} />
			<PodcastCardInfo title={podcast.title} episode={podcast.id} description={podcast.description} />
		</NavLink>
	);
}

PodcastCard.propTypes = {
	className: PropTypes.string,
	podcast: PropTypes.object,
	spotlight: PropTypes.bool
};

export default styled(PodcastCard)`
    width: 49%;
    margin-bottom: 50px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 5px;

    font-size: 14px;
    text-decoration: none;
`;
