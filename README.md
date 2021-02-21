
# SERVER

- 로또 api 호출시 필요해서 만듦(cors 문제)
- npm 설치로 해도 상관 없음

# CLIENT
   
- android studio 설치 필수(emulator를 사용 하려면 필요 expo에서 지원 x) 
- yarn 설치 필요
- yarn install
- 실행은 package.json script 참고
 
---

## 실행 방법
  1. npm install -g yarn
  2. yarn install
  3. yarn start

---

## build 방법
### 안드로이드

1. expo build:android
2. expo 계정 연결

### IOS (애플 스토어 인증 받고 빌드 테스트 필요)

1. expo build:ios  
2. 빌드 참고
[EXPO Site](https://docs.expo.io/distribution/building-standalone-apps/, "expo link")

## TODO 
   - android에서 로또 api 호출시 에러 원인 확인 필요(ios는 잘됨)