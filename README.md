# 프리미엄 쿠팡 파트너스 랜딩 페이지

이 프로젝트는 광고 영상을 통해 유입된 방문자에게 최적화된 상품 리스트를 제공하고, 쿠팡 파트너스 링크로 연결해주는 모던하고 깔끔한 웹사이트입니다.

## 기능 및 특징
- **깔끔하고 밝은 모던 스타일:** 최신 UI 트렌드를 반영한 디자인
- **리스트 형태 레이아웃:** 인스타그램 링크트리와 유사한 모바일 친화적 인터페이스
- **간편한 데이터 관리:** 코드를 수정할 필요 없이 `products.json` 파일만 수정하여 상품 추가/변경 가능
- **부드러운 애니메이션:** 마우스 호버 및 로딩 스켈레톤 UI 적용

## 상품 추가하는 방법
`products.json` 파일을 열고 다음과 같은 형식으로 상품을 추가하세요.

```json
{
  "id": "고유번호(예: 5)",
  "title": "상품 이름",
  "imageUrl": "상품 이미지 주소(URL)",
  "coupangLink": "본인의 쿠팡 파트너스 단축 링크",
  "badge": "배지 텍스트 (예: BEST, 할인중. 비워두면 표시 안됨)"
}
```

## 무료 배포 방법 (GitHub + Cloudflare Pages)

이 사이트를 나만의 도메인(또는 무료 도메인)으로 인터넷에 올리는 방법입니다.

### 1단계: GitHub에 코드 올리기
1. [GitHub](https://github.com/)에 회원가입 및 로그인을 합니다.
2. 우측 상단의 `+` 버튼을 누르고 **New repository**를 클릭합니다.
3. 저장소 이름(예: `my-coupang-site`)을 적고 **Create repository**를 누릅니다.
4. 완성된 파일들(`index.html`, `styles.css`, `script.js`, `products.json`)을 해당 저장소에 업로드(Commit) 합니다.

### 2단계: Cloudflare Pages로 배포하기
1. [Cloudflare](https://dash.cloudflare.com/)에 가입 및 로그인합니다.
2. 좌측 메뉴에서 **Workers & Pages** -> **Pages** 탭을 클릭합니다.
3. **[Git에 연결(Connect to Git)]** 버튼을 누릅니다.
4. 방금 만든 GitHub 저장소를 선택하고 **저장 및 배포(Save and Deploy)**를 클릭합니다.
5. (선택사항) 빌드 설정은 기본값으로 두시면 됩니다. (Framework preset: None)
6. 1~2분 뒤면 `https://my-coupang-site.pages.dev`와 같은 무료 도메인이 발급되며 사이트가 온라인에 배포됩니다!
