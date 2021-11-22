import React, { useState, useEffect } from 'react';

import HoleModel from '../models/hole';

import EditHoleInformation from '../components/EditInformation/EditHoleInformation';

function EditHole() {
  const [hole, setHole] = useState([]);

  useEffect(function () {
    fetchHole();
  }, []);

  const fetchHole = () => {
    HoleModel.all().then((json) => {
      setHole(json.hole);
    });
  };

  return (
    <div>
      <EditHoleInformation hole={hole} />
    </div>
  );
}

export default EditHole;
