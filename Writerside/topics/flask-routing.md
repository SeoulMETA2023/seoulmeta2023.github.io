# 라우팅

웹사이트에 URL 경로를 하나 만들어 봅시다.

`http://127.0.0.1:5000/hello`로 접속하면 Hello World!를 띄워보겠습니다.

예제 코드는 아래와 같습니다.

```python
from flask import Flask
app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
```

```python
@app.route("/hello")
def hello_world():
    return "Hello World!"
```

`@app.route()`함수로 웹사이트의 경로를 하나 만들어줍니다.

`http://127.0.0.1:5000/hello`로 접속하면 아래 함수를 실행하게됩니다.

> `@app.route("/")`로 설정하게 된다면,
> `http://127.0.0.1:5000/`로 들어왔을 때 아래 함수를 실행하게 됩니다.

아래 함수 `hello_world()`는 Hello World!를 반환함으로써 웹사이트에 띄워지도록 합니다.

> 다른 라우터에 해당하는 함수와 이름이 겹치지 않게 주의하여 주세요.

{title="여러 라우터를 만들게 된다면..."}{style="warning"}
