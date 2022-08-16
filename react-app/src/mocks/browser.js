import { setupWorker } from 'msw';
import { authHandlers } from './auth';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...authHandlers);
