class Enrollment {
  constructor(enrollmentId, student, course) {
    this.enrollmentId = enrollmentId;
    this.student = student;
    this.course = course;
    this.status = "pending";
  }

  register() {
    this.status = "registered";
  }

  dropCourse() {
    this.status = "dropped";
  }
  showEnrollment() {
    console.log("Enrollment ID:", this.enrollmentId);
    console.log("Student:", this.student);
    console.log("Course:", this.course);
    console.log("Status:", this.status);
  }
}

module.exports = Enrollment;
