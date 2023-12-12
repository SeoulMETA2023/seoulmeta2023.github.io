# SQL 구문 사용해보기

지금까지 배운 SQL문을 직접 실행해봅시다.

```python
import sqlite3

con = sqlite3.connect("student.sqlite3")
cur = con.cursor()

cur.execute("CREATE TABLE student_list (id INTEGER, name TEXT, phone_number TEXT, birth_date TEXT);")
```
커서에서 `.execute()`함수로 SQL문을 실행할 수 있습니다.

## SQL 구문 포맷팅

상황에 따라 SQL 구문에 원하는 변수를 넣어야 될 상황이 나오게 되는데, 그럴때에는 아래와 같이 하면 됩니다.

```python
student_id = 20715
student_name = "유승연"
student_phone_number = "010-5039-8847"
student_birth_date = "2006-02-20"

cur.execute("INSERT INTO student_list VALUES (?, ?, ?, ?);",
			(student_id, student_name, student_phone_number, student_birth_date)
)

cur.execute("INSERT INTO student_list VALUES (:id, :name, :phone_number, :birth_date);",
			{
				"id": student_id, 
				"name": student_name, 
				"phone_number": student_phone_number,
				"birth_date": student_birth_date
			}
)
```

위 2개의 execute 구문 다 같은 뜻입니다.

물음표(?)를 넣고 뒤에 순서대로 변수를 넣을 수 있다.
또는, `:변수`형태로 이름을 넣고 뒤에 딕셔너리를 넣어서 이름마다의 변수를 넣어줄 수 있습니다.

간단하게 물음표(?)를 넣는 방식이 좋겠지만, 한 구문에 많은 변수가 들어가는 경우에는 가독성이 떨어질 수 있습니다.
2가지 표현 방식을 적절히 사용합시다.

> `f`나 `%` 또는 `+`를 이용해서 문자열에 변수를 포맷할 수 있습니다.
> 
> 하지만 이러한 방식은 대표적인 웹서버의 취약점인 `SQL Injection` 공격에 매우 취약해집니다.

{style="note"}{title="사실은..."}
