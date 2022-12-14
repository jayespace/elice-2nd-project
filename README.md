<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/logo_team17.png" alt="Logo" /><br>
---
#### 식단에 대한 칼로리 및 3대 영양소를 계산해주고,<br> 자신의 식단을 등록해 전문가의 솔루션을 받을 수 있는 서비스입니다. 
<br>


### 🥕 기획 의도 / 목적

- 누군가 만들어놓은 다이어트 식단 포맷을 따라가는 서비스들이 많습니다.
- 현재 내가 먹고있는 식단이 대략 몇 칼로리인지, 영양정보는 어떤지는 손수 찾아야 했습니다.
- 누구나 한번쯤 계획했다가 실패하는 다이어트를 칼로리라는 직관적 지표를 통해 도와주는 서비스입니다.
- 다이어트를 계획중인 유저라면 사용 가능하며, 인터넷 서핑이 귀찮은 사람이라도 손쉽게 식단 관리를 할 수 있습니다.
- 남녀노소 사용할 수 있는 간단한 서비스를 만들고자 하였습니다.

<br>

### 🥕 프로젝트만의 차별점

- 나만의 맞춤 식단을 그램 단위로 계산 가능합니다.
- 식단 총 칼로리와 영양정보, 식단 내 아침 점심 저녁 식사별 칼로리와 영양정보, 음식 낱개의 영양정보를 제공합니다.
- 영양학적 솔루션은 전문가들의 도움을 받아 식단을 더욱 개선해 나만의 맞춤 건강식단을 제공합니다.
- 목표 고객층이 특정되어 있지 않습니다.

<br>

### 🥕 서비스 메인 / 서브 기능

- **메인 기능**
  - 검색창을 통한 음식 검색 기능
  - 로그인 시 나의 식단 저장, 검색, 삭제 기능
  - 사용자 정보 수정, 탈퇴 기능
  - 사용자 상세 정보 입력 시 BMI / RDI 자동 계산 기능
  - 전문가 자격증 이미지 등록 기능
  - 전문가 코멘트 추가, 수정, 삭제 기능

<br>

- **서브 기능**
  - OAuth 로그인 기능
  - 코멘트 확인 시 전문가의 자격증 이미지 확인 기능

<br> 

### 🥕 시스템 아키텍쳐

<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/system+architecture.png" alt="System Architecture" /><br>

### 🥕 유저 시나리오

<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/flowchart.png" alt="Flow Chart" /><br>

### 🥕 프로젝트 구성

- 사용 스택
  - 프론트엔드
    - React, React-Bootstrap
    - Styled component
    - Redux
  - 백엔드
    - Express, Node
    - Mongoose, multer, AWS S3
    - Babel
  - 인프라
    - Google Cloud Platform, Docker
  - 컨벤션
    - eslint(Airbnb), prettier



<br>

### 🥕 프로젝트 자료
- [데일리 스크럼](https://working-lunge-260.notion.site/8435015d087f421b9941b525fa102dd9)
- [최종 발표 PPT](https://docs.google.com/presentation/d/1_X8iHxnb_eN-TJPrqon1h_iyMeZyavbM21w7E3-WXwk/edit?usp=sharing)

<br>

### 🥕 팀원 소개

| 이름   | 역할       | 구현 기능                                                                             |
| ----  | --------  | ----------------------------------------------------------------------------------- |
| 주지호 | 백엔드       | 유저(일반, 전문가) API, 코멘트 & 식단 API, 네이버 / 카카오 OAuth 적용, 전반적인 팀 프로젝트 일정 진행 |
| 신재이 | 백엔드      | 음식 & 카테고리 API, 칼로리 검색 외부 API 연동, AWS S3 이미지 업로드, GCP VM 설정 및 Docker 배포  |
| 김단헌 | 프론트엔드   | 유저 식단 목록 페이지, 유저 코멘트 페이지, 전문가 인증 페이지, UI 서포트   |
| 조영환 | 프론트엔드   | 식단 계산 페이지, 음식 검색 페이지, 칼로리 및 영양소 확인 페이지, 서비스 디자인 및 기획 |
| 조희승 | 프론트엔드   | 회원가입, 로그인, 로그아웃, 정보수정, 회원탈퇴 페이지, Nav바 컴포넌트 구현  |
| 조희정 | 프론트엔드   | 메인 홈 페이지, 전문가 코칭페이지 - 코멘트 추가, 수정, 삭제 기능, 공통 컴포넌트 구현  |
