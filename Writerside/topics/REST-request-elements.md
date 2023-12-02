# REST의 요청 요소들

## URL
요청을 경로를 결정하는 구성요소입니다.

참고로, URL의 구조는 다음과 같다. 아래는 URL의 모든 요소를 나타내어 보았습니다.
```
https://www.seoul-meta.com:4000/home/page?param=true#1
```

Protocol(https)
: 통신 방식 명시합니다.

Sub Domain(www)
: 메인 도메인과 서브 도메인으로 서비스를 분리할 때 사용합니다.
예를 들어 구글과 지메일은 `https://www.google.com`과 `https://mail.google.com`으로 서브 도메인만 다르게 되어 있습니다.

Domain(seoul-meta.com)
: domain<br/>서브 도메인과 도메인 자리에는 IP 번호가 올 수 있습니다.

Port(4000)
: 도메인 옆에 콜론(:)을 적고 포트 번호를 적는다. 포트 번호는 (0 ~ 99999)까지 있습니다.

Path(home/page)
: 해당 도메인에서의 더 자세한 경로를 표시할 수 있습니다.

Parameter(?param=true)
: 링크 뒤에 물음표(?)가 붙고 그 뒤에 `키=값`의 형태로 붙는 것이 특징입니다. 
여러 데이터가 들어간다면 `키1=값1&키2=값2`과 같이 and(&)기호로 구분합니다. 
구글 검색으로 예를 들자면 구글은 `https://www.google.com/search?q=python` 다음과 같이 python을 검색하게 된다면 이러한 링크가 만들어집니다. 
해당 링크의 search 뒤로 q값에 python이 들어간 모습을 볼 수 있습니다.

Anchor(#1)
: 같은 페이지 내에서 특정 위치로 이동할 때 쓰입니다. 
약간의 책갈피 느낌인데요, 예를 들어 나무위키에서는 각 문단에 anchor를 넣어 원하는 문단으로 바로가게 할 수 있는 기능이 있습니다.

## Header
HTTP 헤더는 클라이언트와 서버가 요청 또는 응답으로 부가적인 정보를 전송할 수 있도록 해줍니다.

보통은 사용자를 식별할 수 있는 코드(토큰)을 넣어 전송합니다.

## Status code
상태 코드는 클라이언트와 서버간 요청을 할 때에 나오는 대부분의 상황을 3자릿수의 코드로 정의하였습니다. 

{style="compact"}
200번대
: 요청이 성공적으로 되었습니다.

400번대
: 서버가 요청을 이해할 수 없습니다.

> Status code 404는 리소스를 찾을 수 없을 때 나옵니다.

{title="Not Found"}{style="note"}

아래 웹사이트에서 더 많은 상태 코드를 살펴볼 수 있습니다.

[developer.mozilla.org](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

## Data
요청에 들어갈 데이터입니다.

데이터는 항상 문자열이여서, 보통은 많은 데이터를 포함시키기 위해 대표적으로 JSON 또는 XML 포맷을 많이 사용합니다.
이런 포맷을 사용한 데이터는 파싱을 통해 프로그래머에게 친숙한 데이터 구조로 변환이됩니다.

> 요즘은 JSON으로 REST 요청을 많이 보냅니다.

> 데이터를 넣지 않은 상태로 요청을 할 수도 있습니다.

{style="note"}{title="사실은..."}
