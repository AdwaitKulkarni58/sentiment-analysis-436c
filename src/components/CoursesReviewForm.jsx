import { useState, useEffect } from "react";
import "./CoursesReviewForm.css";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function CoursesReviewForm() {
  const [studentNumber, setStudentNumber] = useState("");
  const [course, setCourse] = useState("CPSC110");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [review, setReview] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState(
    "Sucessfully uploaded review!"
  );

  const handleStudentNumberChange = (event) => {
    setStudentNumber(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alertVisible]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bucketName = import.meta.env.VITE_S3_BUCKET;
    const jsonStringData = JSON.stringify({
      studentNumber: studentNumber,
      course: course,
      year: year,
      major: major,
      review: review,
    });
    const blob = new Blob([jsonStringData], { type: "application/json" });
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_INVOKE_URL
        }${bucketName}%2f${course}/${studentNumber}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: blob,
        }
      );
      console.log("success");
      setAlertVariant("success");
      setAlertMessage("Sucessfully uploaded review!");
      setAlertVisible(true);
      //TODO clear fields
    } catch (error) {
      console.log(error);
      setAlertVariant("danger");
      setAlertMessage("Error uploading review");
      setAlertVisible(true);
    }
  };

  return (
    <>
      <Alert variant={alertVariant} show={alertVisible}>
        {alertMessage}
      </Alert>
      <h5>Write your review!</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="studentNumber">
          <Form.Label>Student Number</Form.Label>
          <Form.Control
            type="number"
            value={studentNumber}
            onChange={handleStudentNumberChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Course">
          <Form.Label>Course</Form.Label>
          <Form.Select
            value={course}
            onChange={handleCourseChange}
            className="select-course"
          >
            <option value="CPSC110">CPSC 110</option>
            <option value="CPSC210">CPSC 210</option>
            <option value="CPSC310">CPSC 310</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            value={year}
            onChange={handleYearChange}
            min="1"
            max="4"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="major"
          value={major}
          onChange={handleMajorChange}
        >
          <Form.Label>Major</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="review"
          value={review}
          onChange={handleReviewChange}
        >
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" className="review" />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CoursesReviewForm;
