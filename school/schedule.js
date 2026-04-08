// class Schedule {
//   constructor(course, teacher, classroom, day, startTime, endTime) {
//     this.course = course; // Object จาก Course.js
//     this.teacher = teacher; // Object จาก Teacher.js
//     this.classroom = classroom; // Object จาก Classroom.js
//     this.day = day;
//     this.startTime = startTime;
//     this.endTime = endTime;
//   }

//   // Method แสดงข้อมูลตารางเรียน
//   showSchedule() {
//     console.log(`--- ตารางเรียน ---`);
//     console.log(`วิชา: ${this.course.courseName}`);
//     console.log(`ผู้สอน: ${this.teacher.name}`);
//     console.log(
//       `สถานที่: ห้อง ${this.classroom.roomNumber} (อาคาร ${this.classroom.building})`,
//     );
//     console.log(
//       `เวลา: ทุกวัน${this.day} [${this.startTime} - ${this.endTime}]`,
//     );
//     console.log(`------------------`);
//   }

//   // Method อัปเดตเวลา
//   updateTime(newDay, newStart, newEnd) {
//     this.day = newDay;
//     this.startTime = newStart;
//     this.endTime = newEnd;
//     console.log(`อัปเดตตารางเรียนวิชา ${this.course.courseName} เรียบร้อยแล้ว`);
//   }
// }

class Schedule {
  constructor(course, teacher, day, time, classroom) {
    this.course = course;
    this.teacher = teacher;
    this.day = day;
    this.time = time;
    this.classroom = classroom;
  }

  createSchedule() {
    console.log(`สร้างตารางเรียนสำเร็จ`);
  }

  updateSchedule(newDay, newTime) {
    this.day = newDay;
    this.time = newTime;
    console.log(`อัปเดตตารางเป็น ${this.day} เวลา ${this.time}`);
  }

  showSchedule() {
    console.log(`ตารางเรียน`);
    console.log(`วิชา: ${this.course.courseName}`);
    console.log(`ครู: ${this.teacher.name}`);
    console.log(`วัน: ${this.day} เวลา: ${this.time}`);
    console.log(`ห้อง: ${this.classroom.roomNumber}`);
  }
}

module.exports = Schedule;
