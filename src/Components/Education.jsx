import React from "react";
import Information from "./Information";

const Education = (props) => {
  const educations = [
    {
      'position':'대학교',
      'name': '한국방송통신대학교',
      'date': {'from': '2020년 03월', 'to': 'Current'},
      'desc': ['컴퓨터과학과 재학']
    }, {
      'position':'전문대학',
      'name': '인하공업전문대학',
      'date': {'from': '2016년 03월', 'to': '2019년 02월'},
      'desc': ['정보통신과 졸업 (전문학사)']
    }, {
      'position':'수료',
      'name': '(사)인천지식산업협회',
      'date': {'from': '2016년 03월', 'to': '2016년 08월'},
      'desc': ['Hybrid Web & App 개발자과정 수료 (800시간)']
    }, {
      'position':'고등학교',
      'name': '인천 영선고등학교',
      'date': {'from': '2008년 03월', 'to': '2011년 02월'},
      'desc': ['졸업']
    },

  ];

  return (
      <div className="w3-container w3-card-4 w3-white">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <Information props={educations}/>
      </div>
  );
};

export default Education;