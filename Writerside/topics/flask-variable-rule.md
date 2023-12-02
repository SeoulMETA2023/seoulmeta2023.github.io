# URL 변수 규칙

URL을 받아서 유동적인 웹사이트를 만들어봅시다.

```python
@app.route("/hi/<name>")
def say_hi(name):
    return "Hello %s" % name
```
위 코드는 `http://127.0.0.1/hi/` 다음에 오는 값을 `name` 변수로 받아서 Hello `name`을 출력하는 함수입니다.
그렇기 때문에 `http://127.0.0.1/hi/piop2`를 입력하면 화면에 Hello piop2가 출력이 될 것 입니다.

근데 여기에 들어오는 모든 변수들은 기본적으로 문자열 형태로 들어오게 됩니다. 
이것을 정수나 부동 소수점의 형태로 바꾸고 싶을 때가 있을 때에는 아래와 같이 작성해주면 됩니다.

```python
@app.route("/cookie/<int:count>")
def count_cookies(count):
    return "Here are %d cookies" % count
```
위 코드는 `http://127.0.0.1/cookie/` 다음에 오는 값을 정수의 형태로 바꾼 후에 `count` 변수에 값을 저장하고,
Here are `count` cookies를 출력합니다.

## URL 변수의 데이터 구조들
URL 변수 규칙들을 원하는 타입으로 받고 싶을 때에는 `<타입:변수이름>`형태로 적어야합니다.
다음 줄에는 가능한 타입들이다.

- `string`(기본): 문자열의 형태로 저장됩니다.
- `int`: 정수의 형태로 저장됩니다.
- `float`: 부동 소수점의 형태로 저장됩니다.
- `path`: 슬래시(/)가 포함된 문자열의 형태로 저장된다. 즉, 라우트 URL 뒤에 있는 모든 경로가 문자열로 저장된다는 의미입니다.


#### 전체 코드 {collapsible="true"}

`get_user`와 `make_user`이 구현이 되지 않았으므로, 아래 코드는 실제로 실행이 되지는 않습니다.

```python
from flask import Flask
app = Flask(__name__)

@app.route("/hi/<name>")
def say_hi(name):
    return "Hello %s" % name

@app.route("/cookie/<int:count>")
def count_cookies(count):
    return "Here are %d cookies"

if __name__ == "__main__":
    app.run()
```
