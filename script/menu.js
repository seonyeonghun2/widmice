// 1.DOM Select (=선택), 변수 할당(=제어)
        // 1-1. const : 상수 선언 키워드
        // 1-2. let : 변수 선언 키워드   ( vs  var : 오래전에 사용했던~ 지금도 쓰지만, 앞으로는 쓰지 않을..)
        const burger = document.querySelector("#burger");
        let flag = false; // 최초 상태 : 클릭 전
        // 2.Event(클릭, 터치..) 처리
        burger.addEventListener("click", function(){
            // 2-1. navbar 선택하고
            const navbar = document.querySelector(".navbar");
            
            // 2-2. narbar 스타일 조작(30% -> 100%, height:auto --> 400px)
            // 2-3. 클릭했을때 navbar에 active 라는 상태를 추가
            // 2-3. <div class="navbar active">... + CSS Media Query를 활용
            navbar.classList.toggle("active");   // .add() : 클래스 추가 메소드 , .remove() : 제거 메소드

            // 3. 클릭상태를 반전 : false(클릭 전), 클릭 true(클릭 후), 반복...
            flag = !flag;

            // 4. google font icon을 선택
            const span = document.querySelector(".material-symbols-outlined");
            
            // 5. 클릭할때마다 flag 상태값에 따라, 구글폰트 아이콘의 이름 값(=문자열)을 업데이트 ==> UI도 업데이트 됨!
            flag ? span.innerText = "menu": span.innerText = "close";

            // 6. 메뉴 펼침시 화면 스크롤 하지 않게
            if(flag) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
           
        })