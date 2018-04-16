# FDS Snake 게임 실습

이 프로젝트는 [뱀 게임](https://en.wikipedia.org/wiki/Snake_%28video_game_genre%29)의 로직을 쉽게 구현해볼 수 있도록, 기반 코드를 미리 작성해 놓은 템플릿 프로젝트입니다.

- 필요한 도구를 설치한 후 프로젝트를 실행시키세요.
- `src` 폴더 아래에 [SnakeGameLogic.js](./src/SnakeGameLogic.js) 파일을 편집하며 변화를 관찰해보세요.
- 뱀 게임이 제대로 동작할 수 있도록 SnakeGameLogic 생성자의 내부를 채워보세요.
- [config.js](./src/config.js) 설정 파일을 편집해보세요.

## Node 설치

- 버전 매니저 설치
  - Windows - [nvm-windows](https://github.com/coreybutler/nvm-windows)
  - macOS - [nvm](https://github.com/creationix/nvm) (설치 후 터미널 재시작)
- 아래 명령을 차례대로 실행
  - `nvm install 8.11.1`
  - `nvm use 8.11.1`

지금 당장 필요하지는 않으나 나중에 필요해질 수 있으므로 아래 도구들을 미리 설치하는 것이 좋습니다.

- Windows - [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)
- macOS - 터미널에서 `xcode-select --install` 실행

## 프로젝트 명령

- 프로젝트 의존성 설치
  - `npm install`
- 프로젝트 실행
  - `npm start`
- 프로젝트 빌드
  - `npm run build`

## 배포

[Netlify](https://www.netlify.com/)의 [자동 배포 기능](https://www.netlify.com/docs/continuous-deployment/)을 활용해 쉽게 배포를 할 수 있습니다.

1. Netlify에 로그인한 후, 메인 페이지의 **New site from Git** 버튼을 눌러 Github 저장소를 연결하세요.
1. 빌드 설정의 'build command' 필드에는 `npm run build`를, 'publish directory' 필드에는 `dist`를 입력하세요.
