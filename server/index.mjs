import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

// environment variable by default is in .env at the root of the project
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { prompt } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  // console.log(prompt);

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: prompt,
    });
    const message = completion.data.choices[0].message;
    // console.log(message.content);
    res.json({ completion: message.content });
  } catch {
    res.status(500);
  }
});

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
