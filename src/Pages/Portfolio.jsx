import React from 'react';
import Information from "../Components/Information";

const Portfolio = () => {
    const portfolios = [
        {
            name: '성적 입력 매크로',
            date: {from: '2016년 11월', to: ''},
            desc: ["학적부 보관실에서 업무처리를 빠르게 하기위해 AutoHotKey로 개발하였습니다.",
                "한페이지 입력에 10분이상 걸리던 작업을 이 프로그램을 이용하여 1분으로 1/10 만큼 업무시간을 단축 하였고, 정확한 입력이 가능했습니다!",
                "더욱 편하게 살기위해 제작하였습니다."],
            image: 'autohotkey.png'
        }, {
            name: '김비서',
            date: {from: '2016년 5월', to: '2016년 6월'},
            desc: ["Hybrid Web & App 개발자 과정 Semi Project 로 Cordova를 사용한 일정관리 웹 앱 개발에 참여하였습니다.",
                "Google Map API 를 이용하여 길 찾기를 구현 했으며, 경로를 데이터베이스에 저장하여 즐겨찾기를 구현하였습니다.",
                "케이웨더 API 를 이용하여 XML을 JSON으로 파싱하였습니다."],
            image: 'assistkim.png'
        }, {
            position: '',
            name: '여행은 하고 다니니?',
            date: {from: '2016년 7월', to: '2016년 8월'},
            desc: ["Hybrid Web & App 개발자 과정 Final Project 로 Spring Framework 를 기반으로 개발했습니다.",
                "데이터베이스 설계를 하였고, 네이버 아이디 로그인(Oauth)을 구현하였습니다.",
                "또한, 로그인 시 추천 수 및 게시글 조회수로 나이대, 성별 선호 여행지를 보여주도록 구현하였습니다.",
                "Bootstrap Dashboard 를 사용하여, 관리자 페이지를 구현하였습니다."],
            image: 'yhn.png'
        }, {
            position: '',
            name: '사내 홈페이지',
            date: {from: '2019년 3월', to: '2019년 5월'},
            desc: ["에이맨시스템(주) 홈페이지 제작을 하였습니다."],
            image: 'homepage.png'
        }, {
            position: '',
            name: '에이패드',
            date: {from: '2019년 5월', to: '2019년 6월'},
            desc: ["모바일 출결관리 웹앱의 Front End 및 Back End 를 작업하였습니다.",
                "Progressive Web App (PWA) 으로 개발 되었습니다."],
            image: 'apad.png'
        }, {
            position: '',
            name: '외출/외박 관리',
            date: {from: '2019년 6월', to: '2019년 7월'},
            desc: ["외출 및 외박을 신청할 수 있는 웹앱의 Front End 및 Back End 를 작업하였습니다.",
                "Progressive Web App(PWA) 으로 개발 되었습니다."],
            image: 'gohome.png'
        }, {
            position: 'Java, Spring Boot, Gradle, JPA, QueryDSL',
            name: 'API Server 개발 및 유지보수',
            date: {from: '2019년 12월', to: '2022년 2월'},
            desc: ["2019년 12월: Slack Bot 을 이용한 운영 업무 처리 기능 개발",
                "2020년 1월 ~ 2월: 점포 API 개발 및 유지보수",
                " 픽업 가능 점포 전달 API 개발",
                "2020년 3월: 이벤트 페이지 API 개발",
                "2020년 5월: EMS 운송 정보 연동",
                "2020년 7월: 회원 등급 프로세스 변경에 따른 개발",
                " 기존 Lagacy Batch Shell 로 동작하던 회원 등급 변경 프로세스를 Spring Batch 를 이용하여 동작하도록 변경",
                "2021년 1월 ~ 2월: 네이버 지도 내 편의점 택배 접수 가능 유무 전달",
                "2021년 2월 ~: 점포 API 스펙 개선 및 지도 스펙 사항에 따라 개발 진행",
                "2021년 5월: 페이코 반값 택배 오픈",
                "2021년 11월 ~ 12월: 대한통운 주소 정제 API 개발",
                "2021년 12월 ~: 수지원넷 주소 정제 API 개발 진행"

            ]
        }, {
            position: 'Spring MVC, eGovFramework, Maven, mybatis',
            name: '홈페이지 유지보수',
            date: {from: '2020년 1월', to: '2022년 2월'},
            desc: ["2021년 2월 까지 현업 부서 요구 사항에 따른 기능 개발",
                "2021년 3월 이후 외주 용역 계약으로 이후 배포 관리 진행"]
        }, {
            position: 'Spring MVC, eGovFramework, Maven, mybatis',
            name: '홈페이지 CMS 유지보수',
            date: {from: '2020년 1월', to: '2022년 2월'},
            desc: ["2021년 2월 까지 현업 부서 요구 사항에 따른 기능 개발",
                "2021년 3월 이후 외주 용역 계약으로 이후 배포 관리 진행"]
        }, {
            position: 'Vue.js',
            name: '이벤트 페이지 개발 및 유지보수',
            date: {from: '2020년 3월', to: '2020년 4월'},
            desc: ["Vue.js 로 개발 진행",
                "UI/UX 및 프로세스 설계",
                "마케팅 요구사항에 따라 배포 진행"
            ]
        }, {
            position: 'React.js, Express.js',
            name: '픽업지도 개발',
            date: {from: '2021년 3월', to: '2022년 2월'},
            desc: ["~ 2021년 5월: 반값 픽업지도 오픈",
                "UI/UX 및 프로세스 설계",
                "페이코 앱 내 반값택배 예약 사용",
                "2021년 10월 ~: 국내 픽업지도 개발 진행"
            ]
        }, {
            position: 'Next.js',
            name: '픽업 지도 전환',
            date: {from: '2022년 1월', to: '2022년 2월'},
            desc: ["react.js 를 next.js 로 전환"]
        }, {
            position: 'Python',
            name: '반복 운영 처리 업무 개발',
            date: {from: '2019년 12월', to: '2022년 2월'},
            desc: ["Python 을 이용하여 DB Connection, 내부 API Server curl 요청",
                "이후 Airflow 로 전환 예정"]
        }, {
            position: 'Unix(IBM AIX), Crontab, Shell Script',
            name: '배치관리',
            date: {from: '2019년 9월', to: '2022년 2월'},
            desc: []
        }, {
            position: '기타',
            name: '배포 관리',
            date: {from: '2019년 9월', to: '2022년 2월'},
            desc: ["형상관리: Git Branch 정책 관리 및 사용자 관리",
                "CI/CD: Jenkins, Github Action",
                "Docker, Docker Compose",
                "IBM AIX, AWS, Portainer"
            ]
        },
        //{
        // position: '비용 관리',
        // name: '라이센스',
        // date: {from: '2019년 9월', to: '2022년 2월'},
        // desc: ["Jetbrains, Github, AWS, Parallels, DBSchema",
        //     "문서 작성: Notion, Jira, Confluence",
        // "앱개발: Google Play Store, Apple App Store"]
        // },
        {
            position: 'Nuxt.js',
            name: 'LG U+ 로봇 관리 플랫폼',
            date: {from: '2022년 3월', to: '2022년 5월'},
            desc: []
        },
        {
            position: 'Nuxt.js',
            name: 'LG U+ 로봇 관제 플랫폼',
            date: {from: '2022년 3월', to: '2022년 5월'},
            desc: []
        },
        {
            position: 'Nuxt.js',
            name: 'LG U+ AI',
            date: {from: '2022년 4월', to: '2022년 4월'},
            desc: []
        },
        {
            position: 'Nuxt.js',
            name: 'LG U+ 데이터레이크',
            date: {from: '2022년 6월', to: 'Current'},
            desc: []
        },
    ];

    return (
        <div className="w3-content w3-margin-top">
            <div className="w3-row-padding w3-container">
                <div className="w3-container w3-card-4 w3-white w3-margin-bottom">
                    <div className="w3-container">
                        <h2 className="w3-text-grey w3-padding-16">
                            <i className="fa fa-folder fa-fw w3-margin-right w3-xxlarge w3-text-teal"/>Portfolio
                        </h2>
                    </div>

                    <div className="w3-row-padding">
                        <div className="w3-container w3-white w3-card-4 w3-margin-bottom w3-padding">
                            <div className="w3-container w3-white">
                                <Information props={portfolios}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
