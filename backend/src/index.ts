import { feathers } from '@feathersjs/feathers';
import express, { rest, json, urlencoded, errorHandler } from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import cors from 'cors';
import helmet from 'helmet';
import { APP_NAME } from '@cityadpro/common';

// Cast express because of CommonJS namespace/callable type mismatch under NodeNext
const app = (express as any)(feathers());

// Middlewares
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Feathers configurations
app.configure(rest());
app.configure(socketio());

interface Campaign {
  id: number;
  name: string;
  mediaUrl: string;
  duration: number;
}

// Simple Feathers service for signage campaigns
class CampaignService {
  private campaigns: Campaign[];

  constructor() {
    this.campaigns = [
      { id: 1, name: 'Summer Promo', mediaUrl: 'https://example.com/summer.mp4', duration: 15 },
      { id: 2, name: 'Store Opening', mediaUrl: 'https://example.com/store.mp4', duration: 10 }
    ];
  }

  async find(): Promise<Campaign[]> {
    return this.campaigns;
  }

  async create(data: Omit<Campaign, 'id'>): Promise<Campaign> {
    const campaign: Campaign = {
      id: this.campaigns.length + 1,
      ...data
    };
    this.campaigns.push(campaign);
    return campaign;
  }
}

app.use('campaigns', new CampaignService());

// Express error handler
app.use(errorHandler());

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`${APP_NAME} Feathers backend running at http://localhost:${port}`);
});
