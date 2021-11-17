import React from 'react';

import { Link } from 'react-router-dom';

import './EditSideBar.css';

function EditSideBar() {
  return (
    <div>
      <div className="edit__side__container">
        <div className="sidebar">
          <div className="sidebar__title__container">
            <h1 className="title">Sidebar</h1>
          </div>
          <div className="sidebar__components__container">
            <div className="sidebar__contents">
              <i class="fas fa-tree fa-2x"></i>
              <Link to="course/61855f2c12dc6d555ed78dca">
                <div className="sidebar__title">Course</div>
              </Link>
            </div>
            <div className="sidebar__contents">
              <i class="fas fa-tree fa-2x"></i>
              <Link to="layout/61855e3ffad37089b7fdfbc0/edit">
                <div className="sidebar__title">Layout</div>
              </Link>
            </div>
            <div className="sidebar__contents">
              <i class="fas fa-tree fa-2x"></i>
              <Link to="#">
                <div className="sidebar__title">Reviews</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSideBar;
