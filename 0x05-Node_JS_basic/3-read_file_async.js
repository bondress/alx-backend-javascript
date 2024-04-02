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
        const dbFieldNames = fLines[0].split(',');
        const studPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studGroups).includes(field)) {
            studGroups[field] = [];
          }
          const studEntries = studPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx]
          ]);
          studGroups[field].push(Object.fromEntries(studEntries));
        }

        const totalStudents = Object.values(studGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length
        );
        console.log(`Number of students: ${totalStudents}`);
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
