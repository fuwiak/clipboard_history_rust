import App from './routes/+page.svelte';

const app = new App({
  target: document.getElementById('app') as HTMLElement,
});

export default app;
