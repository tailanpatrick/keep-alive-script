import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
	path: path.resolve(__dirname, './.env'),
});

const projects = [
	{
		name: 'api-alunos',
		url: 'https://mvdpwwzvsmprgxaeqdoc.supabase.co/rest/v1/',
		key: process.env.SUPABASE_KEY_API_ALUNOS,
	},
	{
		name: 'api-alunos',
		url: 'https://front-end-alunos.vercel.app/',
		key: process.env.SUPABASE_KEY_API_ALUNOS,
	},
	{
		name: 'Tp-amigo-screto',
		url: 'https://toxrimyniktcermdllph.supabase.co/rest/v1/',
		key: process.env.SUPABASE_KEY_AMIGO_SECRETO,
	},

	{
		name: 'Tp-amigo-screto',
		url: 'https://tp-amigo-secreto.vercel.app/application/grupos',
		key: process.env.SUPABASE_KEY_AMIGO_SECRETO,
	},
];

async function ping() {
	for (const project of projects) {
		try {
			const res = await fetch(project.url, {
				headers: {
					apikey: project.key,
					Authorization: `Bearer ${project.key}`,
				},
			});

			console.log(
				`[${new Date().toLocaleString()}] ✅ ${
					project.name
				} - status: ${res.status}`
			);
		} catch (err) {
			console.error(
				`[${new Date().toLocaleString()}] ❌ ${project.name} - erro: ${
					err.message
				}`
			);
		}
	}
	console.log('');
}

// roda a cada 10 minutos
setInterval(ping, 10 * 60 * 1000);

ping();
