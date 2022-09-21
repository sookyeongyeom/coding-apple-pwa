import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// **********************************************************************
// service-worker.js = 오프라인에서도 일단 사이트 열리게 도와줌
// 1. 나는 html css js 파일을 미리 하드에 저장해둘 것임
// 2. 사이트 접속할 때 다운받지말고 하드에 있던거 쓰셈
// pwa 잘되나 확인하려면 build된걸 code로 열어서 index.html 라이브서버로 열면 됨
// pwa 맞으면 주소창 우측에 설치버튼있음 (강제로 설치버튼 띄우기도 가능)
// Q. 특정 파일들은 캐싱안되게?
// A. node_modules/react-scripts/config/webpack.config.js -> InjextManifest exclude부분에 정규식 추가
// **********************************************************************
// unregister -> register 로 바꾸고 빌드하면 진짜 build/service-worker.js 생김
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
