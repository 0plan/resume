import Information from "./Information";

const WorkExperience = (props) => {

  const experiences = [{
    "position": "Full Stack Developer",
    "name": "(주)GS네트웍스",
    "date": {"from": "2020년 7월", "to": "Current"},
    "desc": []
  }, {
    "position": "Full Stack Developer",
    "name": "CVSnet(주)",
    "date": {"from": "2019년 9월", "to": "2020년 7월"},
    "desc": ["(주)GS네트웍스와 합병"]
  }, {
    "position": "Full Stack Developer",
    "name": "에이맨시스템(주)",
    "date": {"from": "2019년 3월", "to": "2019년 9월"},
    "desc": ["홈페이지, 출결관리 웹앱, 외출/외박 웹앱 개발을 했습니다."]
  }, {
    "position": "워킹 홀리데이호주",
    "name": "호주",
    "date": {"from": "2017년 10월", "to": "2018년 8월"},
    "desc": [""]
  }, {
    "position": "근로장학생",
    "name": "인하공업전문대학",
    "date": {"from": "2016년 11월", "to": "2017년 09월"},
    "desc": ["국가 근로장학생으로 학적부 보관실에서 근로를 했습니다. 업무 시간 단축을 위해 성적입력 매크로프로그램을 제작하였습니다."]
  }, {
    "position": "자격증",
    "name": "정보처리 산업기사",
    "date": {"from": "2017년 08월", "to": ""},
    "desc": [""]
  }, {
    "position": "자격증",
    "name": "정보처리 기능사",
    "date": {"from": "2017년 03월", "to": ""},
    "desc": [""]
  }, {
    "position": "자격증",
    "name": "컴퓨터 활용능력 2급",
    "date": {"from": "2017년 01월", "to": ""},
    "desc": [""]
  }, {
    "position": "수상",
    "name": "2016 과학기술인재 경시대회 (컴퓨팅적 사고 프로젝트) 동상",
    "date": {"from": "2016년 12월", "to": ""},
    "desc": [""]
  }];

  return (<div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience
        </h2>

        <Information props={experiences}/>

        {/*<h4>Careers & Qualifications</h4>*/}
        {/*<p>[자격] 2004년 06월 - 워드프로세서 1급</p>*/}
        {/*<p>[수상] 2009년 06월 - 인천광역시 교육청 학생정보올림피아드 동상 수상</p>*/}
        {/*<p>[자격] 2010년 12월 - 1종보통 운전면허</p>*/}
        {/*<p>[병역] 2012년 03월 ~ 2013년 12월 - 육군 병장 만기전역</p>*/}

      </div>
  );
};

export default WorkExperience;