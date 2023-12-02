# 가독성있게 만들기

한 라우터에서 여러 메소드를 받을 때에는 한 함수에 if문으로 분류해서 넣는 것보다 더 좋은 방법이 있습니다.

```python
# before
@app.route("/hello", methods="GET")
def hello():
    if request.method == "GET":
        return "Hello"

# after
@app.get("/hello")
def hello():
    return "Hello"
```

`route` 대신에 받을 메소드인 `get`을 적어주었다. if문으로 구분하지 않고, 눈에 더 잘 읽히는 것 같습니다.

그렇게 `/user` 라우트도 변경하여 보겠습니다.

```python
# before
@app.route("/user", methods=["POST", "GET"])
def user():
    user_name = request.arg.get("userName")

    if request.method == "GET":
        if get_user(user_name) is None:
            abort(400)
        return get_user(user_name)
    elif request.method == "POST":
        if get_user(user_name) is not None:
            abort(400)
        make_user(user_name)

# after
@app.get("/user")
def user_get():
    if get_user(request.arg.get("userName")) is None:
        abort(400)
    return get_user(user_name)

@app.post("/user")
def user_make():
    if get_user(request.arg.get("userName")) is not None:
        abort(400)
    make_user(user_name)
```

GET과 POST에 따라 함수가 2개로 나뉜 것으로 보입니다.
해당 라우트에서 HTTP 메소드만을 사용할 때에는 유용합니다.

여기에는 `get`과 `post`만 나왔지만, 나머지 `put`과 `delete`도 다 가능합니다.

#### 전체 코드 {collapsible="true"}

```python
from flask import Flask

app = Flask(__name__)

@app.get("/hello")
def hello():
    return "Hello"

@app.get("/user")
def user_get():
    if get_user(request.arg.get("userName")) is None:
        abort(400)
    return get_user(user_name)

@app.post("/user")
def user_make():
    if get_user(request.arg.get("userName")) is not None:
        abort(400)
    make_user(user_name)
```
