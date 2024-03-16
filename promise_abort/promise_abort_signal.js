import { setTimeout } from 'timers/promises';

const cancelTimeout = new AbortController();
const cancelTask = new AbortController();

async function timeout() {
  try {
    await setTimeout(10000, undefined, { signal: cancelTimeout.signal });
    console.log('a')
    cancelTask.abort();
  } catch {
    // Ignore rejections here
  }
}

async function task() {
  try {
    await  setTimeout(3000, undefined, { signal: cancelTimeout.signal });
    console.log('b')

  } finally {
    cancelTimeout.abort();
  }
}

await Promise.all([ timeout(), task() ]);