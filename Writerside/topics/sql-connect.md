# 데이터베이스 열기

데이터베이스를 열어봅시다.

```python
import sqlite3

con = sqlite3.connect("student.sqlite3")
```
`student.sqlite3` 데이터베이스 파일을 열었습니다.

> 자동으로 파일을 생성해줍니다.

{style="note"}{title="존재하지 않는 파일을 열면..."}

```python
con = sqlite3.connect(":memory:")
```
경로를 넣는 곳에 :memory:를 넣게 된다면, 컴퓨터의 렘에 데이터베이스를 엽니다.
컴퓨터가 꺼지면 데이터베이스는 자동으로 삭제됩니다.

```python
con.close()
```
`close()`로 열었던 데이터베이스의 연결을 닫을 수 있습니다.

```python
con.commit()
```
그리고 잊으면 안되는 `commit()`으로 변경사항을 저장할 수 있습니다.
