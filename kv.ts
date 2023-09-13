//@ts-ignore
import fetch from 'node-fetch';

const path = require('path');
 
const envs = process.env["KV_REST_API_URL"] ? process.env : require('dotenv').config({ 
  path: path.resolve(__dirname, '../../../.env.development.local') 
}).parsed;


export async function set(key: string, value: string): Promise<void> {
    fetch(`${envs["KV_REST_API_URL"]}/set/${key}/${value}`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + envs["KV_REST_API_TOKEN"]
        }
    }).then(() => {
        console.log("VercelKV Success");
    }).catch((err: string) => {
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