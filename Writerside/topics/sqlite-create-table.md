# 테이블 만들기

데이터 베이스에 테이블을 만드는 법을 알아보겠습니다.

엑셀에서 여러 개의 시트를 만들 수 있는 것처럼, 한 데이터 베이스에 테이블은 여러 개 만들 수 있습니다.

이제부터 데이터베이스에 학생들의 출석부를 만들어봅시다.
학생마다 아래와 같은 정보를 저장할 예정입니다.

{style="wide"}
id
: 학번

name
: 이름

phone_number
: 전화번호

birth_date
: 생년월일

```SQL
CREATE TABLE student_list (id INTEGER, name TEXT, phone_number TEXT, birth_date TEXT);
```

`CREATE TABLE`을 적은 후 테이블 이름인 `student_list`를 넣고 괄호 안에 값을 차례차례 넣은 모습입니다.

## 데이터 기본값 설정하기
출석부에서 새로운 학생을 추가할 때, 학생의 이름을 같이 넣지 않았다면 "이름 없음"으로 추가되게 해봅시다.
```SQL
CREATE TABLE student_list (id INTEGER, name TEXT DEFAULT "이름 없음", phone_number TEXT, birth_date TEXT;
```

기본값이 존재하길 원하는 값 뒤에 `DEFAULT`를 붙인 후에 그 뒤에 기본값이 될 값을 넣어주면 됩니다.
