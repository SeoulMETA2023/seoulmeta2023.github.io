# 템플릿 띄워보기

이번에는 원하는 라우트에 HTML을 띄우는 방법을 알아보겠습니다.

## 1. 파일 만들기

`/templates` 폴더에 아래의 HTML 파일을 만들어서 넣어줍니다.
`index.html`로 저장해주세요.

> `/templates` 폴더에 관한 내용은 [프로젝트 구조](Flask.md#project_structure)를 참고해주세요.

```html
<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>Hello Flask</title>
        <style>
            html, body {
                margin: 0;
                height: 100%;
                overflow: hidden;
            }
            iframe {
                overflow: visible;
            }
        </style>
    </head>
    <body>
        <iframe src="https://webglsamples.org/google-io/2011/lots-of-objects-google.html" width="100%" height="100%"/>
    </body>
</html>
```

{collapsible="true"}{collapsed-title="index.html"}

## 2. 코드 작성하기

```python
from flask import render_template
```

{style="medium"}
render_template(name)
: `/templates` 폴더에 있는 HTML 파일을 웹사이트에 출력합니다.

이 함수를 이용하면 아래와 같이 간단하게 HTML 파일을 출력할 수 있습니다.

```python
@app.route("/")
def home():
    return render_template("index.html")
```

이제 코드를 실행하여 `http://127.0.0.1:5000`에 들어가서 확인해봅시다.

#### 전체 코드 {collapsible="true"}

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
```

```html
<!-- /templates/index.html -->
<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>Hello Flask</title>
        <style>
            html, body {
                margin: 0;
                height: 100%;
                overflow: hidden;
            }
            iframe {
                overflow: visible;
            }
        </style>
    </head>
    <body>
        <iframe src="https://webglsamples.org/google-io/2011/lots-of-objects-google.html" width="100%" height="100%"/>
    </body>
</html>
```
