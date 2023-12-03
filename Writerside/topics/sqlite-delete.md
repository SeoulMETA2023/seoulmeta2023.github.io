# 데이터 삭제하기

모든 `student_list`의 데이터를 삭제해봅시다.

```SQL
DELETE FROM student_list;
```

`DROP`가 다른 점은 `DROP`은 테이블을 삭제하는 것이고,
`DELETE`는 테이블의 데이터를 삭제하는 것입니다. 위 구문은 테이블의 모든 구문을 삭제하게 됩니다.

```SQL
DELETE 
FROM student_list 
WHERE id = 20715;
```
`WHERE` 조건문을 추가하여 `id`가 20715인 학생의 데이터를 삭제하였습니다.
