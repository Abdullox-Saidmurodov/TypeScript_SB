// Interface

enum Role {
    ADMIN,
    STUDENT,
}

interface IUser {
    id: number
    name: string
    role: Role
}

interface ICourse {
    id: number
    title: string
    description: string
    students: IUser[]
}

// Role checking

function isAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
    return user.role === Role.ADMIN
}

// Courses list
const courses: ICourse[] = []

// Add course
function addCourse(user: IUser, course: ICourse) {
    if(isAdmin(user)) {
        courses.push(course)
        console.log(`Course added ${course.title}`)
    } else {
        console.log('Only admin can add course')
    }
}

// Enroll student
function enrollStudent(user: IUser, courseId: number) {
    const course = courses.find(course => course.id === courseId)

    if(!course) {
        console.log('Course not found')
        return
    }

    if(user.role === Role.STUDENT) {
        course.students.push(user)
        console.log(`Student enrolled ${user.name}`)
    } else {
        console.log('Only student can enroll')
    }
}

// Student list
function listStudent(user: IUser, courseId: number) {
    if(!isAdmin(user)) {
        console.log('Only admin can see list students')
        return
    }

    const course = courses.find(course => course.id === courseId)
    if(!course) {
        console.log('Course not found')
        return
    }

    console.log(`Students in ${course.title}: ${course.students.map(c => c.name).join(', ')}`)
}

// Data
const admin: IUser = { id: 1, name: 'Admin', role: Role.ADMIN }
const student1: IUser = { id: 2, name: 'Ali', role: Role.STUDENT }
const student2: IUser = { id: 3, name: 'Osman', role: Role.STUDENT }

const course: ICourse = {
    id: 101,
    title: 'Math',
    description: 'Math course',
    students: [],
}

// Call functions
addCourse(admin, course)

enrollStudent(student1, course.id)
enrollStudent(student2, course.id)

listStudent(admin, course.id)

console.log(courses)