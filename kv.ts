import fetch from 'node-fetch';

const path = require('path');
 
const envs = require('dotenv').config({ 
  path: path.resolve(__dirname, '../../../.env.development.local') 
}).parsed;


export async function set(key: string, value: string): Promise<void> {
    await fetch(`${envs["KV_REST_API_URL"]}/set/${key}/${value}`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + envs["KV_REST_API_TOKEN"]
        }
    }).then((res) => {
        console.log("VercelKV Success");
    }).catch((err) => {
        console.log("VercelKV Error: " + err);
    });
}

export async function get(key: string): Promise<string> {
    const resp = await fetch(`${envs["KV_REST_API_URL"]}/get/${key}`, {
        headers: {
            Authorization: "Bearer " + envs["KV_REST_API_TOKEN"]
        }
    });

    const data: any = await resp.json();
    return data.result;
}