
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Rota para gerar o client token
app.post('/api/paypal/token', async (req, res) => {
  const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');

  try {
    const response = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', 'grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    res.json({ client_token: response.data.access_token });
  } catch (error) {
    console.error('Error generating PayPal token:', error);
    res.status(500).send('Failed to generate PayPal token');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});