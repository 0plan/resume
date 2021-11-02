import React from 'react';

const Portfolio = (props) => {
  return (
      <div className="w3-content w3-margin-top">
        <div className="w3-row-padding w3-container">
          <div className="w3-container w3-card-4 w3-white w3-margin-bottom">
            <div className="w3-container">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-folder fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Portfolio
              </h2>
            </div>
            <div className="w3-row-padding">
              <div className="w3-third">
                <div className="w3-container w3-white w3-card-4 w3-margin-bottom w3-padding">
                  <img src="/img/autohotkey.png" alt="homepage"/>
                  <div className="w3-container w3-white">
                    <p><b>성적 입력 매크로</b></p>
                    <p>2016년 11월</p>
                    <p>학적부 보관실에서 업무처리를 빠르게 하기위해 AutoHotKey로 개발하였습니다. <br/>
                      한페이지 입력에 10분이상 걸리던 작업을 이 프로그램을 이용하여 1분으로 1/10 만큼 업무시간을 단축 하였고, 정확한 입력이 가능했습니다!<br/>
                      더욱 편하게 살기위해 제작하였습니다.</p>
                  </div>
                </div>
              </div>
              <div className="w3-third">
                <div className="w3-container w3-white w3-card-4 w3-margin-bottom w3-padding">
                  <img src="/img/assistkim.png" alt="homepage"/>
                  <div className="w3-container w3-white">
                    <p><b>김비서</b></p>
                    <p>2016년 5월 - 2016년 6월</p>
                    <p>Hybrid Web & App 개발자 과정 Semi Project 로 Cordova를 사용한 일정관리 웹 앱 개발에 참여하였습니다.<br/>
                      Google Map API 를 이용하여 길 찾기를 구현 했으며, 경로를 데이터베이스에 저장하여 즐겨찾기를 구현하였습니다.<br/>
                      케이웨더 API 를 이용하여 XML을 JSON으로 파싱하였습니다.</p>
                  </div>
                </div>
              </div>
              <div className="w3-third">
                <div className="w3-container w3-white w3-card-4 w3-margin-bottom w3-padding">
                  <img src="/img/yhn.png" alt="homepage"/>
                  <div className="w3-container w3-white">
                    <p><b>여행은 하고 다니니?</b></p>
                    <p>2016년 7월 - 2016년 8월</p>
                    <p>Hybrid Web & App 개발자 과정 Final Project 로 Spring Framework 를 기반으로 개발했습니다.<br/>
                      데이터베이스 설계를 하였고, 네이버 아이디 로그인(Oauth)을 구현하였습니다. <br/>
                      또한, 로그인 시 추천 수 및 게시글 조회수로 나이대, 성별 선호 여행지를 보여주도록 구현하였습니다.<br/>
                      Bootstrap Dashboard 를 사용하여, 관리자 페이지를 구현하였습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
