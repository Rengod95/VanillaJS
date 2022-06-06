const solution = (s) => {
    return s.length%2 === 0 ? s.substring(s.length/2-1,s.length/2+1) : s.charAt(s.length/2)
}

// 1. charAt() : 문자열에서 문자 추출
// 2. substring() : 문자열에서 특정 범위의 문자열(단어) 추출
// 3. slice() : 문자열에서 특정 범위의 문자열(단어) 추출
// 4. split() : 구분자로 여러 문자열로 분리, 원하는 문자열 추출
