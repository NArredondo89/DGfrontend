import React, { useState, useEffect } from 'react';
import CourseModel from '../models/course';
import EditParkInformation from '../EditParkInformation';

function EditHome() {
  const [course, setCourse] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(function () {
    fetchCourse();
  }, []);

  const fetchCourse = () => {
    CourseModel.show().then((json) => {
      //NOTE; // THIS NEEDS TO BE CAPATILIZED INORDER TO PULL THE DATA
      setCourse(json.Course[0]);
    });
  };
  return (
    <>
      <EditParkInformation course={course} />
    </>
  );
}

export default EditHome;
