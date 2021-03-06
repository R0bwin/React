import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopImage from 'components/TopImage';
import Title from 'components/Title';
import InfoText from 'components/InfoText';
import Progress from 'components/Progress';
import Thumbnail from 'components/Thumbnail';

const summaryText = [
	"My most valueable experience is with front-end development which lasted for almost 3 years. After that I decided to study to bachelors degree in electrical engineering. It took me 3 years to get my bachelors degree along with good grades. Most of my skills was aquired during my studies but I lack hands-on experience within most fields.",
	"The reason I was able to finish my studies as being among the 30% that graduate along the programs set date is because of my ambition and my ability to analyse what was required of me to complete the courses. The most interesting courses was embedded systems, programming, control automations and telecommunications."
];

let skills = [];

skills.push({title: "Embedded systems / Electronics", width: "72"});
skills.push({title: "C and Java programming", width: "75"});
skills.push({title: "HTML, CSS, JavaScript", width: "88"});
skills.push({title: "Android application development", width: "42"});
skills.push({title: "Automation- and Control theory", width: "60"});
skills.push({title: "Telecommunication", width: "55"});
skills.push({title: "Linear algebra and Calculus", width: "55"});

export const Extra = () => (

	<React.Fragment>
		<TopImage name="Robin Winroth" subInfo="" image="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
		<Container>
			<Title title="About me" />
			<Row className="pb-5">
				<Col md={5}>
					<InfoText title="Summary" text={summaryText}/>
				</Col>
				<Col md={2}></Col>
				<Col md={5}>
					<Progress title="My skills" progress={skills}></Progress>
				</Col>
			</Row>
			<Row className="pb-5">
				<Col>
					<Thumbnail icon="calculator" title="Algorithm" subtitle="Visualization of algorithms" text="Look at one of the most common algorithms and how they work for easier understanding of their principles." image="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg" />
				</Col>
			</Row>
		</Container>
	</React.Fragment>
	
)