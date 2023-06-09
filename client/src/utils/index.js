import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randmomPrompt = surpriseMePrompts[randomIndex];

  if (randmomPrompt === prompt) return getRandomPrompt(prompt);
  return randmomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}