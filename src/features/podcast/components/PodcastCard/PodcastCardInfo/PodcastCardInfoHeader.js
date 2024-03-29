import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const PodcastCardInfoHeader = ({ className, title, episode }) => {
	return (
		<div className={className}>
			<h3>{title}</h3>
			<span> Macacast #{episode} </span>
		</div>
	);
}

PodcastCardInfoHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	episode: PropTypes.string
};

export default styled(PodcastCardInfoHeader)`
    display: flex;
    flex-direction: column;
    color: #000;
    height: 64px;

    & h3 {
        font-size: 18px;
        margin: 0;
    }

    & span {
        font-size: 16px;
        color: rgba(0,0,0,.4);
        width: 125px;
    }
`;
