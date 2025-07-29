import React from 'react';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import { partliclesConfig, particlesHexConfig } from '../config/particles-config';

const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log('engine: ', engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log('container: ', container);
	}, []);

	return (
		<div if='particles-background'>
			<Particles
				id='tsparticles'
				particlesLoaded='particlesLoaded'
				init={particlesInit}
				Loaded={particlesLoaded}
				options={partliclesConfig}
				height='100vh'
				width='100vw'
			></Particles>
		</div>
	);
};

export default ParticleBackground;
