# Flask

**Flask**는파이썬으로 작성된 마이크로웹 프레임워크입니다.
쉽게 말해서, 쉽게 만들 수 있는 **웹 서버 개발 도구**라는 뜻입니다.

Flask는 복잡한 여러 파일 구조없이 파일 하나만 있어도 서버가 구동할 정도로 간단합니다.

## 시작하기 앞서

Flask는 파이썬에 기본적으로 장착되어 있는 것이 아니라, 
다른 사람들이 만든 것들이여서 인터넷에 있는 Flask를 `pip`로 다운받아주어야 합니다.

윈도우는 CMD로, 맥은 Terminal을 켜주세요.

<tabs>
<tab title="Windows">
<code-block>pip install flask</code-block>
</tab>
<tab title="Mac">
<code-block>pip3 install flask</code-block>
</tab>
</tabs>

## 기본 프로젝트 구조 {id="project_structure"}
```
/project
	/static
	/templates
	app.py
```

{style="wide"}

app.py
: Flask 코드를 적습니다. 

templates
: HTML 파일이 들어가는 폴더입니다.

static
: CSS, JS 파일과 다른 이미지 등등 리소스 파일들이 들어가는 폴더입니다.

위 구조대로 폴더를 만들어 주세요.

## 기본 코드
가장 기본이 되는 코드는 아래와 같습니다.
```python
from flask import Flask
app = Flask(__name__)

if __name__ == "__main__":
    app.run()
```

코드를 천천히 뜯어봅시다.

```python
from flask import Flask
app = Flask(__name__)
```
flask 패키지에서 Flask 클래스를 불러와줍니다. 가장 기초가 되는 클래스입니다.

그리고 app 변수에 Flask 앱을 생성해줍니다.

```python
if __name__ == "__main__":
	app.run()
```
`run()` 메소드로 앱을 실행시켜줍니다. 이 프로그램을 실행했을 때, 아래 코드를 실행한다는 조건문입니다.

> 파이썬의 `if __name__=="__main__"`구문은
> C/C++의 `main` 함수와 같은 의미입니다.

{title="C/C++언어를 해보셨다면..."}{style="note"}

기본적으로 5000번 포트에서 열려서, `http://127.0.0.1:5000/`에 들어가면 켜진 서버를 볼 수 있습니다.

```python
if __name__ == "__main__":
	app.run(debug=True)
```
개발중이라면, debug를 활성화해서 에러 내용을 바로 볼 수 있게 할 수 있습니다.
