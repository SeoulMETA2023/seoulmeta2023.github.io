# 데이터 가져오기

```python
import sqlite3

con = sqlite3.connect("student.sqlite3")
cur = con.cursor()

cur.execute("SELECT * FROM student_list;")
```
SELECT같은 데이터를 가져오는 구문을 했을 때에는 값을 가져오는 2가지의 방법이 있습니다.

```python
cur.fetchone()
```
하나만 가져와도, 여러 개를 가져와도, 오직 하나의 값만 나오게 합니다.
여러 개의 값을 가져온다면, 그 값들 중에서 하나씩 가져옵니다.
가져올 값이 없다면 None이 나옵니다.

```python
cur.fetchmany()
```
보통 여러 개의 값을 가져올 때, 사용합니다.
가져온 모든 값들을 리스트에 묶어서 나오게 합니다.
가져올 값이 없다면 빈 리스트(\[\])가 나옵니다.

```python
for data in cur.fetchmany():
	...
```

`fetchmany()`의 경우 for 반복문과 같이 쓸 수 있습니다.
리스트를 반환하기 때문입니다.

> `fetchone()`과 `fetchmany()`는 SELECT같은 값을 가져오는 구문이 실행되고 나서 바로 하단 줄에 작성해야합니다.

{style="warning"}
