import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import cors from 'cors';
import helmet from 'helmet';
import { APP_NAME } from '@cityadpro/common';

const app = express(feathers());

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Feathers configurations
app.configure(express.rest());
app.configure(socketio());

// Simple Feathers service for signage campaigns
class CampaignService {
  constructor() {
    this.campaigns = [
      { id: 1, name: 'Summer Promo', mediaUrl: 'https://example.com/summer.mp4', duration: 15 },
      { id: 2, name: 'Store Opening', mediaUrl: 'https://example.com/store.mp4', duration: 10 }
    ];
  }

  async find() {
    return this.campaigns;
  }

  async create(data) {
    const campaign = {
      id: this.campaigns.length + 1,
      ...data
    };
    this.campaigns.push(campaign);
    return campaign;
  }
}

app.use('campaigns', new CampaignService());

// Express error handler
app.use(express.errorHandler());

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`${APP_NAME} Feathers backend running at http://localhost:${port}`);
});
