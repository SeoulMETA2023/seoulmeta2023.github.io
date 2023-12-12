# 커서

데이터베이스에 접근하게 해주는 커서를 얻어봅시다.

```python
import sqlite3

con = sqlite3.connect("student.sqlite3")
cur = con.cursor()
```

`cursor()`함수를 통해서 커서를 얻을 수 있습니다.
커서는 데이터베이스에 SQL문을 실행시켜주도록 접근할 수 있게 해줍니다.
