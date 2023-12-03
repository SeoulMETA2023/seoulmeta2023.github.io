# 데이터 추가하기

INSERT INTO를 사용하면 원하는 테이블에 데이터를 추가할 수 있습니다.

```SQL
INSERT INTO 
    student_list 
VALUES (20715, "유승연", "010-5039-8849", "2006-02-20");
```
`student_list`의 칼럼 순서대로 `id`, `name`, `phone_number`, `birth_date` 순으로 데이터를 추가해주었습니다.

```SQL
INSERT INTO 
    student_list 
VALUES 
    (20715, "유승연", "010-5039-8849", "2006-02-20"), 
    (00000, "유승현", "000-0000-0000", "0000-00-00");
```
여러 개의 데이터도 한 번에 추가할 수 있습니다.

또는, 원하는 칼럼의 데이터만 넣어줄 수 있습니다
```SQL
INSERT INTO 
    student_list (id, phone_number) 
VALUES (20715, "010-5039-8847");
```

위 코드에서는 `id`와 `phone_number`만 저장했습니다
이렇게 된다면 `name`은 기본값인 "홍길동"이 들어가고,
`birth_date`는 기본값이 주어지지 않았기 때문에 `NULL`값이 들어가게 됩니다.
