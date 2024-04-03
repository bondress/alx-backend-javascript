const fs = require('fs');

const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fLines = data.toString('utf-8').trim().split('\n');
        const studGroups = {};
        const dbFNames = fLines[0].split(',');
        const studPNames = dbFNames.slice(0, dbFNames.length - 1);

        for (const line of fLines.slice(1)) {
          const studRecord = line.split(',');
          const studPValues = studRecord.slice(
            0,
            studRecord.length - 1
          );
          const field = studRecord[studRecord.length - 1];
          if (!Object.keys(studGroups).includes(field)) {
            studGroups[field] = [];
          }
          const studEntries = studPNames.map((propName, idx) => [
            propName,
            studPValues[idx]
          ]);
          studGroups[field].push(Object.fromEntries(studEntries));
        }

        const totStudents = Object.values(studGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length
        );
        console.log(`Number of students: ${totStudents}`);
        for (const [field, group] of Object.entries(studGroups)) {
          const studentNames = group
            .map((student) => student.firstname)
            .join(', ');
          console.log(
            `Number of students in ${field}: ${group.length}. List: ${studentNames}`
          );
        }
        resolve(true);
      }
    });
  });

module.exports = countStudents;
