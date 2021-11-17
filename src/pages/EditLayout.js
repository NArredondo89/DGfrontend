import React, { useState, useEffect } from 'react';

import EditLayoutInformation from '../components/EditInformation/EditLayoutInformation';

import LayoutModel from '../models/layout';

function EditLayout() {
  const [layout, setLayout] = useState({});

  useEffect(function () {
    fetchLayout();
  }, []);

  const fetchLayout = () => {
    LayoutModel.show().then((json) => {
      setLayout(json.layout[0]);
    });
  };

  return (
    <div>
      <EditLayoutInformation layout={layout} />
    </div>
  );
}

export default EditLayout;
