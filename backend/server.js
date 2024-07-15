const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

require('dotenv').config(); 
const PORT = process.env.PORT || 3000;
const mindsdbApiUrl = process.env.MINDSDB_API_URL;

app.use(cors())
app.use(express.json());

app.post('/predict-crop', async (req, res) => {
    try {
        const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

        const response = await axios.post(mindsdbApiUrl, {
            data: [
                { N, P, K, temperature, humidity, ph, rainfall }
            ]
        });

        console.log('Response:', response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
            const responseData = response.data[0];

            if (responseData.label_encoded_explain) {
                const labelExplain = JSON.parse(responseData.label_encoded_explain);
                // const predictedValue = labelExplain.predicted_value;

                res.json({ labelExplain: labelExplain });
            } else {
                throw new Error('label_encoded_explain not found in response');
            }
        } else {
            throw new Error('Empty or unexpected response format');
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
