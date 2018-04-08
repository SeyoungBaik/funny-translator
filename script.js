/*
1. 문장을 입력받고 변수에 저장
2. 입력받은 변수를 분해한다 
    - 분해 후 배열로 저장을 함 
    - 분해 된 배열을 분석하여서 3번째 받침글자를 4번째와 바꾼다? 
3. 그렇게 재조합된 글자를 다시 머지 한다. 
4. 리턴값으로 출력
5. 버튼 이벤트 등 HTML 과 연동 가능하도록 (함수 및 클래스 or 아이디 맞춰준다)
*/

function translator(str) {
    return str.split('').map(char => { //문장을 글자별로 쪼개고 map 을돌린다.map??
        var d = Hangul.disassemble(char); //npm install hangul-js 설치 
        //4번째 자모음이 있고, 2째 3째 모음이면 --> 4째와 3째 교환 
        //규칙성의 문제네 그냥.. 
        if (d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) { //isVowel ??
            var tmp = d[3];
            d[3] = d[2];
            d[2] = tmp; //바꿔치기에서 자주사용되는 로직
        }
        return Hangul.assemble(d);// 자모음 다시 조립
    }).join('');
    //console.log('workingggg');
};

window.addEventListener('DOMContentLoaded', function () { //addEventListner 검색?? 매개변수??? DOMContentLoaded??
    //변환 버튼을 누르면 result에 텍스트 변형해 넣어준다. 

    document.querySelector('.change').addEventListener('click', () => { //querySelector ??
        const changedText = translator(document.querySelector('.original-text').value);
        document.querySelector('.result-text').innerText = changedText; // 변형된 문장을 결과에 넣어준다

    });
    //console.log('working');
});