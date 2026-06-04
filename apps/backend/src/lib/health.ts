export const checkHealth = () => {
  return { status: 'ok', uptime: process.uptime() };
};
