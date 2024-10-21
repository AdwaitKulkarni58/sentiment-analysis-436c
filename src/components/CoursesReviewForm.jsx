import { useState } from "react";
import "./CoursesReviewForm.css";
import { Form, Button } from "react-bootstrap";

function CoursesReviewForm() {
  const [course, setCourse] = useState("CPSC110");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [review, setReview] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course, year, major, review);
  };

  return (
    <>
      <h5>Write your review!</h5>
      <Form onSubmit={handleSubmit}>
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
