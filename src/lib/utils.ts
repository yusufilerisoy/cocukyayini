export const basePath = '/cocukyayini';

export function img(path: string): string {
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}
