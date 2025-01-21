# 📚 Next-JS

---

## 📚 프로젝트 생성

- Yarn (1.22.22)
- Node JS (22.11.0)

```bash
npm install -g yarn # Yarn 설치
yarn global add vite next typescript # Vite, Next, TypeScript 설치
yarn create next-app # Vite 기반 React 프로젝트 생성
yarn # 프로젝트 생성 후 패키지 설치

# ---------- Yarn Berry 업그레이드 (선택) ----------
# yarnrc.yml 파일에 nodeLinker: node-modules 라고 되어 있다면 nodeLinker : pnp 로 수정, 없다면 추가
yarn set version stable
yarn install # 재설치
# ---------- Yarn Berry 업그레이드 (선택) ----------


yarn # 패키지 설치
next build # 빌드
next dev or next start # 서버 실행
```

**.gitignore 파일에 추가할 항목들**

```text
### yarn ###
# used Zero-Install
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# unused Zero-Install
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
```

---

## 📚 배운 내용

### Next-JS 핵심 개념

- [1. 서버 컴포넌트란?](./Docs/1-핵심개념/1-서버-컴포넌트.md)