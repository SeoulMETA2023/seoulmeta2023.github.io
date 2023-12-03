# 데이터 조회

`SELECT`와 조건문을 이용하면 여러 작업을 수행할 수 있습니다

기본적인 조회 방법은 아래와 같습니다.

```SQL
SELECT id FROM student_list;
```

위 코드는 `student_list`의 모든 `id`를 조회하였습니다. 이렇게 된다면 데이터의 `id`만 나오게 됩니다.

```SQL
SELECT * FROM student_list;
```
별(\*)을 사용해서 모든 데이터를 가져올 수 있습니다.

## 조건 조회
WHERE로 조건문을 추가할 수 있습니다.

들어가기 전에 기본적인 야라 연산자를 공부해봅시다.

{style="compact"}
\=
: 같다

!=
: 같지않다

\>
: 크다

\>\=
: 크거나 같다

\<
: 작다

<=
: 작거나 같다

and
: 양 옆의 조건이 같다

or
: 양 옆의 조건 중, 하나라도 같다

```SQL
SELECT * 
FROM student_list 
WHERE id = 20715;
```
`student_list`의 모든 데이터 중에서 `id`가 20715인 데이터만 가져왔습니다.

## 범위 조회
`BETWEEN ... AND`문을 이용해서 ~이상~이하의 범위 조회를 할 수 있습니다.
```SQL
SELECT * 
FROM student_list 
WHERE id 
    BETWEEN 20700 AND 20899
```
`id`가 20700 ~ 20899 즉, 2학년 7반과 2학년 8반의 모든 학생들을 선택하였습니다.

## 정렬 조회
`ORDER BY` 구문으로 오름차순/내림차순 조회를 할 수 있습니다.
```SQL
SELECT * 
FROM student_list 
ORDER BY birth_date ASC;

SELECT * 
FROM student_list 
ORDER BY birth_date DESC;
```
학생들의 생일을 오름차순(`ASC`), 내림차순(`DESC`)으로 정렬해 주었습니다.

## 제한 조회
`LIMIT`을 이용하면 검색된 결과들의 개수를 제한할 수 있습니다.
기본적으로 정렬 조회가 되었을 때에만 사용할 수 있습니다.
제한을 정하거나, 원하는 구간의 데이터만 조회할 수 있습니다.

```SQL
SELECT * 
FROM student_list 
ORDER BY birth_date ASC LIMIT 5;

SELECT * 
FROM student_list 
ORDER BY birth_date ASC LIMIT 3, 8;
```
첫 구문은 오름차순 데이터중에서 5개까지만 가져옵니다.
아래 구문은 오름차순된 데이터에서 3 ~ 8번까지의 데이터만 가져옵니다.

## 유사 조회
데이터의 문자열에서 유사한 부분이 있는 데이터만 가져올 수 있습니다.

```SQL
SELECT * 
FROM student_list 
WHERE name LIKE "김%"
```
김으로 시작하는 모든 학생들의 이름을 가져옵니다.
이렇게 `%`는 어떠한 수 많은 문자가 그 곳에 들어갈 수 있음을 뜻합니다.

- 김%: 김으로 시작하는~
- %김: 김으로 끝나는~
- %김%: 중간에 김이 있는~

그리고 하나의 문자만도 찾을 수 있다.
- 김_: 김으로 시작하고, 뒤에 한 글자만 오는 ~
- \_김: 김으로 끝나고, 앞에 한 글자만 오는 ~
- \_김\_: 중간에 김이 있고 양 옆에 한 글자만 있는 ~