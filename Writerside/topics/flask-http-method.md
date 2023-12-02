# HTTP method 처리

받는 HTTP 메소드에 따라 다르게 반응하는 기능을 만들어 볼 것입니다.

## 학생 관리 시스템의 구현

아래와 같은 RESTful API 서버를 만든다 가정해보겠습니다.
- `/hello`에 GET 요청을 하면 Hello가 나오게 합니다.
- `/user`
  - GET 요청을 하면 기존에 있는 유저를 가져오고, 그 정보를 보냅니다.
  - POST 요청을 하면 새로운 유저를 추가하고, 이미 있는 유저라면 에러(400)가 일어나게 합니다.
  - GET과 POST 요청에서는 항상 url 매개변수로 `userName`을 받아 처리할 유저의 이름을 지정합니다.

> 메소드에 관한 내용은 [HTTP method](HTTP-method.md)를 참고해주세요.
> 
> URL 매개변수에 관한 내용은 [REST의 요청 요소들](REST-request-elements.md#url)을 참고하여 주세요.

```python
def get_user(name):
    """
    유저를 검색
    
    존재하는 유저: return 유저 데이터
    존재하지 않는 유저: return None
    """
    ...

def make_user(name):
    """새로운 유저를 추가"""
    ...
```

유저를 검색하거나 새로운 유저를 추가하는 가상의 함수 2개를 만들었다고 가정합니다.
이 함수를 이용해서 학생 관리 시스템을 구현해봅시다.

### 라우트에 메소드 추가하기

원하는 라우트에 원하는 메소드들이 들어오도록 만들 수 있습니다.
다음과 같이 `methods` 매개변수에 넣을 메소드를 리스트로 묶어서 넣으면 됩니다.

아래는 `GET` 메소드만 받는 `/hello` 라우트를 만들었습니다.

```python
@app.route("/hello", methods=["GET"])
def hello():
    ...
```

다음은 `GET`과 `POST`를 받는 여러 메소드가 들어갈 수 있는 `/user` 라우트를 만들었습니다.

```python
@app.route("/user", methods=["POST", "GET"])
def user():
    ...
```

### 메소드 처리하기

한 라우트에서 어떠한 메소드로 요청이 들어왔는지 확인하여, 
처리과정에서 오류가 발생한다면 오류를 발생시킬 수 있게 구현을 해봅시다.

```python
from flask import request, abort
```
- `request`: 현재 라우트로 들어온 요청을 관리할 수 있게 합니다.
- `abort`: HTTP status code로 오류를 발생시킵니다.

> HTTP status code에 관해서는 [REST의 요청 요소들](REST-request-elements.md#status-code)을 참고하여 주세요.

`request`를 이용하여 `/hello` 라우트의 나머지 부분도 완성하여 봅시다.

```python
@app.route("/hello", methods="GET")
def hello():
	if request.method == "GET":
		return "Hello"
```

`request.method`를 이용하면 현재 라우트에 들어온 요청의 메소드 종류를 알 수 있습니다.

그렇게 똑같이 활용하게 된다면, 여러 메소드가 들어오는 `/user`라우트도 아래와 같이 작성할 수 있습니다.

```python
@app.route("/user", methods=["POST", "GET"])
def user():
	user_name = request.arg.get("userName")
	
	if request.method == "GET":
        ...
	elif request.method == "POST":
        ...
```

`request.arg.get` 함수는 해당하는 url 매개변수를 가져옵니다.
메소드를 구분하기 전에 공통되는 작업인 유저의 이름을 url 매개변수로 가져온 것을 볼 수 있습니다.

그리고 이 `user_name`변수를 받고, 
유저를 처리하는 가상의 함수 `get_user`과 `make_user`가 오류가 났을 때 None을 반환하는 것을 활용하면
다음과 같이 나머지도 작성할 수 있습니다.

```python
if requests.method == "GET":
    if get_user(user_name) is None:
        abort(400) # Bad request!
    return get_user(user_name)

elif requests.method == "POST":
    if get_user(user_name) is not None:
        abort(400) # Bad request!
    make_user(user_name)
```

`abort`함수가 실행되면 오류가 실행되고 함수가 중단되기 때문에 `return`을 작성하지 않아도 됩니다.

#### 모든 일은 뜻대로 되지 않는다

```python
user_name = request.arg.get("userName")
```
`requests.arg.get`은 값을 넣어서 요청이 들어온 링크의 URL 매개변수에서 원하는 값을 받을 수 있습니다.
하지만, 이 함수는 URL에 없는 매개변수를 받으려고 할 때 KeyError가 발생한다.
이런 에러의 발생은 아래와 같이 해결 할 수 있을 것입니다.

```python
try:
	user_name = request.arg.get("userName")
except KeyError:
	abort(400)
```
`userName` 매개변수를 제출하지 않았을 때에는 `abort`함수를 이용해서 에러가 나도록 하였습니다.

또는, 값을 넣지 않으면 기본 값을 설정해서 에러가 발생하지 않고 유저 데이터가 반환되게 할 수 있을 것입니다.
```python
try:
	user_name = request.arg.get("userName")
except KeyError:
	user_name =  "유승연"
```
이렇게 에러를 처리해서 기본 유저명을 설정하는 것도 좋지만, 아래에 더 좋은 방법이 있습니다.

```python
user_name = request.arg.get("userName", "유승연")
```
`requests.arg.get`함수의 2번째 매개변수를 이용하면 가져올 값과 없을 때 사용하는 기본값을 설정할 수 있습니다.
전에 썼던 코드보다 3줄이나 줄어든 형태입니다.

> 상황에 따라 오류를 발생할 수도, 기본값을 넣을 수도 있습니다.
> 지금 작성하는 코드에서는 기본값보단 이름을 넣지 않았을 때 오류를 발생하는 것이 더 적합합니다.
> 자신이 구현하는 코드에 대해 잘 고민해보고 선택하시기 바랍니다.

{title="꼭 모든 url 매개변수에 기본값을 쓰라는 의미는 아닙니다."}

#### 전체 코드 {collapsible="true"}

`get_user`와 `make_user`이 구현이 되지 않았으므로, 아래 코드는 실제로 실행이 되지는 않습니다.

```python
from flask import Flask, request, abort

app = Flask(__name__)

@app.route("/hello", methods="GET")
def hello():
	if request.method == "GET":
		return "Hello"

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

if __name__ == "__main__":
    app.run()
```
