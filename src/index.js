import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'Gyuna',
  lastName : 'Kim',
  avatarUrl : 'https://images.unsplash.com/photo-1592922611328-bf9198c42cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
};

const element1 = ( // 괄호는 가독성을 위하여 추가
  // {} 를 이용한 자바스크립트 표현식은 JSX 내에서만 이용할 수 있다
  <h1>
    Hello, {formatName(user)} 
  </h1>
); 

const element2 = ( 
  // JSX는 HTML에보다 JS에 가깝기 때문에 HTML 속성명 대신 camelCase 명명규칙을 따른다. 
  //(HTML)class == (JSX)className, (HTML)tabindex == (JSX)tabIndex 
  <div tabIndex="0">
  </div>
); 

const element3 = ( 
  // JS 표현식을 사용할 때 중괄호 양 옆에 따옴표를 입력하면 안됨.
  // JSX에서는 문자열 값에만 사용한다.
  // 또한 하나의 속성에 문자열, 표현식 동시 사용을 할 수 없다.
  // 태그가 비어있을 때 XML처럼 바로 닫아주어야 한다.
  <img src={user.avatarUrl}/>
); 

// React DOM은 랜더링 전 이스케이프를 한다.
// 즉 애플리케이션에서 명시적으로 작성되지 않으면 주입되지 않는다
// 모든 항목은 랜더링 전 문자열로 변환되고
// 이런 특성으로 XSS(cross-site-scripting) 공격을 방지할 수 있다
const title = Response.potentiallyMaliciousInput;
const element4 = (
  <h1>{title}</h1>
);

// element5와 element6는 동일한 예시로, 똑같은 객체를 반환한다
const element5 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element6 =  React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
/*
//element5와 element6가 반환하는 객체를 단순화해 표현한다면
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}

*/


ReactDOM.render(
  element4,
  document.getElementById('root')
);
