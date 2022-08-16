import { setupServer } from 'msw/node';
import { authHandlers } from './auth';

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...authHandlers);
