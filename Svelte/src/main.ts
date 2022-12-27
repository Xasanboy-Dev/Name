import App from './App.svelte';
import {pool} from "../../config/db"
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
export  const hello =async ()=>{await pool.query(`SELECT * FROM xasanboy`)}
export default app;