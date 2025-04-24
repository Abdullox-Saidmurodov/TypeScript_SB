"use strict";
// Interface
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["STUDENT"] = 1] = "STUDENT";
})(Role || (Role = {}));
// Role checking
function isAdmin(user) {
    return user.role === Role.ADMIN;
}
// Courses list
const courses = [];
// Add course
function addCourse(user, course) {
    if (isAdmin(user)) {
        courses.push(course);
        console.log(`Course added ${course.title}`);
    }
    else {
        console.log('Only admin can add course');
    }
}
// Enroll student
function enrollStudent(user, courseId) {
    const course = courses.find(course => course.id === courseId);
    if (!course) {
        console.log('Course not found');
        return;
    }
    if (user.role === Role.STUDENT) {
        course.students.push(user);
        console.log(`Student enrolled ${user.name}`);
    }
    else {
        console.log('Only student can enroll');
    }
}
// Student list
function listStudent(user, courseId) {
    if (!isAdmin(user)) {
        console.log('Only admin can see list students');
        return;
    }
    const course = courses.find(course => course.id === courseId);
    if (!course) {
        console.log('Course not found');
        return;
    }
    console.log(`Students in ${course.title}: ${course.students.map(c => c.name).join(', ')}`);
}
// Data
const admin = { id: 1, name: 'Admin', role: Role.ADMIN };
const student1 = { id: 2, name: 'Ali', role: Role.STUDENT };
const student2 = { id: 3, name: 'Osman', role: Role.STUDENT };
const course = {
    id: 101,
    title: 'Math',
    description: 'Math course',
    students: [],
};
// Call functions
addCourse(admin, course);
enrollStudent(student1, course.id);
enrollStudent(student2, course.id);
listStudent(admin, course.id);
console.log(courses);
