import axios from 'axios';

const API_KEY = process.env.CLASH_ROYALE_APIKEY

export default async function handler(req, res) {
    try {
        const playerTag = req.query.tag;

        const response = await axios.get(`https://proxy.royaleapi.dev/v1/players/%23${playerTag}/upcomingchests`, {
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
