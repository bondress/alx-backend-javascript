import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return processData(data);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function processData(data) {
  const lns = data.split('\n');
  const res = {};

  for (let i = 1; i < lns.length; i++) {
    const [firstName, lastName, age, field] = lns[i].split(',');

    if (!res[field]) {
      res[field] = [];
    }

    res[field].push(firstName.trim());
  }

  return res;
}

export { readDatabase };
