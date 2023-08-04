<p align="center" >
<a href="#" align="center"> <img src="https://st.kakaocdn.net/shoppingstore/static/common/store/og_logo.png" width="500" height="250" align="center"/></a>
</p>
<h1 align="center">
  카카오톡 쇼핑하기 클론 </br>  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
</h1>

### 🛒 [카카오톡 쇼핑하기](https://store.kakao.com/) 서비스 클론코딩 프로젝트
> 카카오 테크 캠퍼스 1기에서 진행하는 2단계 클론 프로젝트 입니다.

#### [프로젝트 URL](https://user-app.krampoline.com/kf3338e5a9faaa/)

## UI

> 모든 페이지에는 반응형 디자인이 적용되어있습니다 

### 1) 메인 페이지

|데스크탑|모바일|
|---|---|
| <img width="1100" alt="스크린샷 2023-08-04 오후 8 01 33" src="https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/11b34549-def9-4fe3-8b28-3e7664ed3d47"> | <img width="350" alt="스크린샷 2023-08-04 오후 8 01 50" src="https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/ee04ea3f-6df4-4f6b-a50c-6bf1e2a14bc0">|

- 상단 캐러셀 광고
- Card 디자인 & Skeleton 로딩 구현
- hover 애니메이션
- Intersection Observer API & React-Query를 이용한 무한 스크롤
- Grid를 사용해 반응형 레이아웃 구현

### 2) 로그인, 회원가입 페이지

|로그인|회원가입|
|---|---|
|![스크린샷 2023-08-04 오후 8 12 30](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/d12294a7-ac8e-4869-8215-abdb7cda116c)  | ![스크린샷 2023-08-04 오후 8 13 02](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/da11e7a7-286a-4e46-a6ba-0f23054ea86a)|

- 모든 항목에 대한 유효성 검사 구현
- 로그인 정보 Redux + Local Storage 를 통한 상태 관리

### 3) 상품 상세 페이지

|데스크탑|모바일|
|---|---|
|<img width="1100" alt="스크린샷 2023-08-04 오후 8 18 54" src="https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/8764dfb2-cc55-4df9-90d2-ed20baf8fa4e">|<img width="350" alt="스크린샷 2023-08-04 오후 8 19 20" src="https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/0cc4dc23-7270-4536-af37-9c8065aed400">

- 각 상품에 대한 옵션 선택 가능
- 장바구니 담기 기능
- Flex를 사용해 반응형 레이아웃 구현

### 4) 장바구니 페이지
|데스크탑|모바일|
|---|---|
|![스크린샷 2023-08-04 오후 8 23 10](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/49d24e46-3b38-4d66-845f-a28de978f84a)|![스크린샷 2023-08-04 오후 8 23 23](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/9a345670-fb92-4f5e-b7ea-9bc2148fd174)|

- 유저의 모든 장바구니 상품 목록 출력
- 옵션 수정 및 옵션 삭제 가능

### 5) 주문, 주문완료 페이지
|주문하기|주문완료|
|---|---|
|![스크린샷 2023-08-04 오후 8 26 40](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/52c447f7-8b3d-4e9c-a195-66216aaf4e68)| ![스크린샷 2023-08-04 오후 8 27 19](https://github.com/monsta-zo/FE-kakao-shop/assets/83194164/96268f06-e463-43a1-aad8-6f1c4bd01ef7)|


## 디렉토리 구조
> Atomic Design Patter을 따르기 위해 컴포넌트를 나누어 개발하였습니다.
```
📦src
 ┣ 📂apis   // API 요청을 위한 Axios 파일들
 ┣ 📂components // 아토픽 디자인 패턴을 따른 컴포넌트들
 ┃ ┣ 📂atoms
 ┃ ┣ 📂molecules
 ┃ ┣ 📂organisms
 ┃ ┣ 📂templates
 ┣ 📂constants // 공통적으로 사용되는 상수들
 ┣ 📂hooks // 공통적으로 사용되는 커스텀 훅들
 ┣ 📂layouts // 공통적으로 사용되는 페이지 레이아웃들
 ┣ 📂pages // 페이지들
 ┣ 📂store // Redux 상태관리 
 ┣ 📂utils // 공통적으로 사용되는 기타 함수들
```
