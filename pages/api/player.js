import axios from 'axios';

const API_KEY = process.env.CLASH_ROYALE_APIKEY

export default async function handler(req, res) {
    try {
        const playerTag = encodeURIComponent(req.query.tag);
        
        const response = await axios.get(`https://proxy.royaleapi.dev/v1/players/${playerTag}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
