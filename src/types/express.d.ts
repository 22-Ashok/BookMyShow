import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      something?: string; // Add your custom property here
      user?: any;         // Another common example
    }
  }
}