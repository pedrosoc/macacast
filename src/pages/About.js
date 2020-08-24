import React from "react";
import PropTypes from "prop-types";

import i18n from "@i18n";
import containerTypes from "@/constants/containerTypes";

import Section from "@/components/Section";
import styled from "styled-components";

const About = ({ className }) => {
	return (
		<Section first type={containerTypes.text}>
			<div className={className}>
				<div>
					<h5>{ i18n.t("about.title") }</h5>
					<p>Criado em 2019, o projeto de um podcast criado por pontepretanos para pontepretanos tem um objetivo primordial claro: resgatar o interesse dos torcedores e torcedoras pelo clube, com informações quentes, com opiniões isentas e contundentes, com histórias sobre o seu passado e reforçar a identidade da Ponte Preta. O dia a dia do clube, pós e pré-jogo, entrevistas exclusivas com jogadores que marcaram seu nome em nossa história e até bastidores políticos. O Macacast é a voz do pontepretano das arquibancadas na internet.</p>
				</div>
				<div className="second">
					<h4>Ajude o Macacast</h4>
					<p>Se você curte o nosso trabalho, não deixe de nos prestigiar e ajude a melhorar ainda mais a qualidade do seu podcast preferido e a sua experiência como ouvinte. Fazemos o Macacast com muita paixão e, com as doações, podemos fazer ainda melhor e nos dedicar ainda mais ao projeto. O valor será investido na melhoria de materiais, como a compra de microfones para os membros, pagamento de servidores, gravações, e manutenção de outras estruturas.</p>
					<p className="list">
						<span>Você pode fazer a sua doação de duas formas:</span>
						<a href="https://apoia.se/macacast" target="_blank" rel="noopener noreferrer">
							<span className="arrow">-</span>
							<span className="underline">Mensalmente:</span>
							<span className="link">apoia.se/macacast</span>
						</a>
						<a href="https://apoia.se/ajudeomacacast" target="_blank" rel="noopener noreferrer">
							<span className="arrow">-</span>
							<span className="underline">Avulso:</span>
							<span className="link">apoia.se/ajudeomacacast</span>
						</a>
					</p>
					<p>Se você deseja ser patrocinador oficial do projeto, entre em contato conosco por meio de nossas plataformas digitais. Temos certeza de que, com a audiência que temos, a parceria renderá muitos frutos para sua empresa.</p>
				</div>
			</div>
		</Section>
	);
};

About.propTypes = {
	className: PropTypes.string
}

export default styled(About)`
	& h5 {
		font-size: 35px;
	}

	& .second {
		margin-top: 50px;
	}

	& p.list {
		display: flex;
		flex-direction: column;

		& > a {
			margin-top: 5px;
		}
	}

	& a {
		color: #111;

		& span {
			margin-right: 10px;
		
			&.link {
				color: rgba(0,0,0,.68);
				border-bottom: solid 1px rgba(0,0,0,.68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}
`;
