const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

function getById(school, id) {
    Object.values(school.students).forEach(function (s) {
        if (s.id === id) {
            console.log(s);
        }

    });
};

getById(school.students, 13);


function getById(id) {
    Object.values(school.students).forEach(function (i) {
        if (i.id === id) {
            console.log(i);
        }

    });
};
getById(11);

function assignStudent(id, subject) {
    school.teachers.forEach(function (item) {
        if (item.subjects.includes(subject)) {
            if (item.capacityLeft <= 0) {
                console.log('No Space');
            } else {
                item.capacityLeft -= 1;
                Object.values(school.students).forEach(function (cap) {
                    if (cap.id === id) {
                        item.students.push(cap.name);
                    }
                });
            }
        }
    })
};

console.log(assignStudent(13, "chemistry"));
console.log(school.teachers);

function assignTeachersSubject(id, subject) {
    school.teachers.forEach(function (item) {
        if (!item.subjects.includes(subject)) {
            item.subjects.push(subject);
        }
    })
    return school.teachers;
};
console.log(assignTeachersSubject(2, "bible"));


