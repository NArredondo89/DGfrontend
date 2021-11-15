import React from 'react';

import './AdminSection.css';

function AdminSection() {
  return (
    <>
      <div className="admin__title__container">
        <div className="title__wrapper">
          <h1>Meet The Amabassadors</h1>
        </div>
      </div>
      <div className="admin__page__container">
        <div className="admin__container">
          <div className="admin__photo__container">
            <div className="picture__container">
              <img className="admin__photo" src="./images/one.jpg" alt="" />
            </div>
          </div>
          <div className="content__name__container">
            <h1 className="admin__name">Mikey Alvarez</h1>
          </div>
          <div className="content__about__container">
            <div className="content__wrapper">
              <div className="admin__about__menu">
                lorem ipsum dolor sit amet, consectetur adiplorem ips lorem ips
                lorem ips loremlorem ips lorem ips lorem ips loremlorem ips
                lorem ips lorem ips loremlorem ips lorem ips lorem ips
                loremlorem ips lorem ips lorem ips lorem
              </div>
            </div>
          </div>
        </div>
        <div className="admin__container">
          <div className="admin__photo__container">
            <div className="picture__container">
              <img className="admin__photo" src="./images/one.jpg" alt="" />
            </div>
          </div>
          <div className="content__name__container">
            <h1 className="admin__name">Jorgan Goldberg</h1>
          </div>
          <div className="content__about__container">
            <div className="content__wrapper">
              <div className="admin__about__menu">
                {' '}
                lorem ips lorem ips lorem ips lorem lorem ips lorem ips lorem
                ips loremlorem ips lorem ips lorem ips loremlorem ips lorem ips
                lorem ips loremlorem ips lorem ips lorem ips loremlorem ips
                lorem ips lorem ips lorem
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSection;
