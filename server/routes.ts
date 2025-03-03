import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = express.Router();
  app.use('/api', apiRouter);

  // Health check endpoint for Vercel
  apiRouter.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form submission endpoint
  apiRouter.post('/contact', async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      res.json(submission);
    } catch (error) {
      res.status(400).json({ 
        error: 'Invalid submission',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Error handling for API routes
  apiRouter.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}