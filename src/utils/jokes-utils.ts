import { FILE_NAME } from "src/app/constants/jokes";

export const prettifyJokesJSON = (jokes: string[]) => {
  const correction = {
    ',': '\n',
    ']': '',
    '[': '',
  };

  const jokesJSON = JSON.stringify(jokes).replaceAll(
    /\[|\]|,/g,
    (matched) => correction[matched as keyof typeof correction]
  );

  return jokesJSON;
};

export function createDownloadLink(jokes: string[]): void {
  const jokesJSON = prettifyJokesJSON(jokes);
  const blob = new Blob([jokesJSON], {
    type: 'text/plain',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = FILE_NAME;
  link.href = url;
  link.click();
}