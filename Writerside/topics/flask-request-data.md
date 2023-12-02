# requests로 요청 보내기

파이썬의 외부 라이브러리인 requests를 이용하여 HTTP 요청을 보내는 방법을 알아보겠습니다.

## 다운로드

일단 외부 라이브러리인 `requests`를 다운로드 받아주겠습니다.

<tabs>
<tab title="Windows">
<code-block>pip install requests</code-block>
</tab>
<tab title="Mac">
<code-block>pip3 install requests</code-block>
</tab>
</tabs>

## 요청 보내기

```python
import requests
```

`requests`를 이용해서 원하는 링크로 [HTTP method](HTTP-method.md) 요청을 보낼 수 있습니다.

{style="medium"}
requests.get()
: GET 요청을 보냅니다.

requests.post()
: POST 요청을 보냅니다.

requests.put()
: PUT 요청을 보냅니다.

requests.delete()
: DELETE 요청을 보냅니다.

```python
requests.get(
    url="https://127.0.0.1/.../...", 
    params={"name": "someone"}, 
    data={"key": "value"}
)
```

모든 요청 함수들은 `url`을 이용해 요청을 보낼 URL을 설정하고,
`params`로 URL 매개변수를 설정하고,
`data`로 요청 데이터를 보낼 수 있습니다.

## 테스트해보기

[요청 데이터 받기](flask-get-data.md)에서 만든 코드를 테스트하는 코드를 작성해보겠습니다.

```python
import requests

res = requests.get(
    "https://127.0.0.1:5000/hi",
    data={"name": "Piop2"}
)
print(res.text)
```

`.text`을 이용해서 응답을 볼 수 있습니다.

이렇게 서버를 실행한 후에 이 코드를 실행해보면, Hello Piop2가 출력되는 것을 볼 수 있습니다.
