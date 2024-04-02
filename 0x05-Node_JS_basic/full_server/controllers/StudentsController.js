import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const data = await readDatabase('database.csv');
      res.status(200).send(buildResponse(data));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./full_server/database.csv');
      const studentsInMajor = data[major] || [];
      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

function buildResponse (data) {
  let response = 'This is the list of our students\n';

  const fields = [...new Set(Object.keys(data))];

  const sortedFields = fields.sort((a, b) => {
    if (a === 'CS') return -1;
    if (b === 'CS') return 1;
    if (a === 'SWE') return -1;
    if (b === 'SWE') return 1;
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  });

  sortedFields.forEach((field) => {
    if (field === 'CS' || field === 'SWE') {
      response += `Number of students in ${field}: ${
          data[field].length
        }. List: ${data[field].join(', ')}\n`;
    }
  });

  return response;
}

export default StudentsController;
