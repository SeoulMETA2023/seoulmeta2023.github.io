# 요청 데이터 받기

요청 데이터를 받아서 더 많은 정보를 처리하여 봅시다.

요청 데이터는 JSON 형식을 사용함으로써 다양한 데이터 형식을 적용할 수 있습니다.

> HTTP 요청 데이터에 관한 내용은 [REST이 요청 요소들](REST-request-elements.md#data)을 참고하여 주세요.
>
> JSON에 관한 내용은 [JSON](JSON.md)을 참고하여 주세요.

## 인사해보기

아래와 같은 RESTful API 서버를 만든다 가정해보겠습니다.
- `/hi`에 데이터를 보내면 데이터에 있는 `name`을 가져와서 Hello `name`을 출력합니다.
  - 받은 데이터가 없다면 오류가 발생합니다.

```python
@app.get("/hi")
def say_hi():
    """
    try:
        name = 이름
    except 에러:
        abort(400) # 비상 비상 초비상
    
    return f"Hello {이름}"
    """
```

이름이 없다면 오류가 발생하고, 없다면 Hello `name`을 출력하는 코드는 이런 느낌일 것 입니다.

### form 가져오기

```python
from flask import request
```
`request` 모듈에는 요청에 관한 모든 작업을 할 수 있습니다.
이 모듈을 이용해서 받은 데이터를 가져오겠습니다.

```
>>> request.form
{}
```

`request.form`은 요청 데이터를 받게 해줍니다.

기본적으로 아무 데이터를 받지 않는 상태에서는 `{}` 빈 딕셔너리의 구조를 가지게 됩니다.
여기에 데이터가 들어있는 요청을 받게 된다면 이 `request.form`으로 데이터를 가져올 수 있습니다.

이걸 이용해서 `/hi`의 나머지 부분을 채워보겠습니다.

```python
@app.get("/hi")
def say_hi():
    try:
        name = request.form["name"]
    except KeyError:
        abort(400)
    
    return f"Hello {name}"
```

`request.form["name"]`으로 `name` 값을 받아왔습니다.
`request.form`이 기본적으로 딕셔너리이기 때문에 Key를 찾지 못 할 때에는 `KeyError`가 발생하기 때문에 except 구문에 넣어주었다.
마지막으로 받은 `name`변수를 문자열에 포맷해주었습니다.

요청 데이터는 일반적인 방법으로는 보낼 수 없기 때문에, 다음에는 테스트를 위한 요청 데이터를 보내는 방법을 알아보겠습니다.

## 전체 코드 {collapsible="true"}

```python
from flask import Flask, request, abort

app = Flask(__name__)

@app.get("/hi")
def say_hi():
    try:
        name = request.form["name"]
    except KeyError:
        abort(400)
    
    return f"Hello {name}"
```
