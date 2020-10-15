### Deno 공부하고 정리한것.

!! Deno는 빠르게 업데이트 되고있습니다. 본문에서 "최근"의 기준은 2020.10.15입니다.

목차와 체계, 팩트체크는 천천히 해보는걸로,, 각 항목 별 세부설명은 블로그에 업뎃할 예정

- 자체 bundle 명령어가 있어서 , webpack이나 parcel이 필요하지 않다.
- package.json의 대안으로, 의존성 관리 방법에는 deps.js에 모든 url을 때려박거나, import_map을 사용하는 방법이 있다. import map을 붙이는것이 추세이다. [import_map(deno.land manual)](https://deno.land/manual@v1.4.6/linking_to_external_code/import_maps)
  - 각 파일에 URI로 모듈을 import하는것은 모듈 업데이트를 힘들게 하는 최악의 방법이다.

### Deno로 작성된 중간규모의 애플리케이션

-
