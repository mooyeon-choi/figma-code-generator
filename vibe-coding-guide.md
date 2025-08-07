# Vibe Coding 가이드: Claude Code와 Figma MCP를 활용한 효율적인 개발 방법론

## 1. Vibe Coding이란?

Vibe Coding은 AI 도구와의 자연스러운 대화를 통해 직관적이고 빠르게 개발하는 방법론입니다. 복잡한 문서를 읽거나 긴 설정 과정 없이, 개발자의 의도와 "분위기(Vibe)"를 AI가 파악해 효율적으로 코드를 생성하는 접근 방식입니다.

### 핵심 철학
- **직관적 소통**: 자연어로 개발 의도를 전달
- **반복적 개선**: 빠른 프로토타이핑과 점진적 개선
- **맥락 이해**: AI가 프로젝트 구조와 패턴을 파악하여 일관된 코드 생성
- **시각적 개발**: 디자인을 보고 바로 코드로 변환

## 2. Claude Code 기본 설정 및 최적화

### 2.1 프로젝트 설정 파일 (CLAUDE.md)

모든 프로젝트에는 `CLAUDE.md` 파일을 생성하여 AI가 프로젝트의 맥락을 이해할 수 있도록 합니다:

```markdown
# 프로젝트명

## 기술 스택
- React + TypeScript + Vite
- shadcn/ui + Tailwind CSS
- Figma MCP 서버 연동

## 코딩 컨벤션
- 컴포넌트명: PascalCase
- 파일명: kebab-case
- styled-components 대신 Tailwind CSS 사용
- shadcn/ui 컴포넌트는 정확히 매칭되는 경우에만 사용

## 테스트 명령어
yarn lint
yarn build
```

### 2.2 권장 Claude Code 설정

```json
{
  "model": "opus", // 복잡한 작업에는 Opus 모델 사용
  "autoFormat": true,
  "useHooks": true,
  "customCommands": {
    "/figma": "Figma MCP를 사용하여 선택된 디자인을 React 컴포넌트로 변환",
    "/test": "현재 컴포넌트의 테스트 코드 생성"
  }
}
```

### 2.3 유용한 단축키 및 명령어

- `/clear`: 이전 컨텍스트 초기화
- `Shift + 드래그`: 파일 참조
- `Esc`: Claude 중단 (Ctrl+C 대신)
- `↑`: 이전 채팅 세션 접근
- `#`: 메모리 시스템으로 컨텍스트 저장

## 3. Figma MCP 서버 활용법

### 3.1 설정 요구사항

- **Figma 계정**: Professional, Organization, Enterprise 플랜
- **Figma Desktop App** 필수
- **MCP 서버 활성화**: `http://127.0.0.1:3845/sse`

### 3.2 Figma 디자인 최적화 팁

#### 디자인 준비사항
```markdown
✅ 권장사항:
- 컴포넌트화된 디자인 사용
- 의미있는 레이어명 설정
- 일관된 색상 변수 활용
- 큰 화면은 작은 컴포넌트로 분할

❌ 피해야 할 것:
- 복잡한 중첩 구조
- 의미없는 레이어명 (Rectangle, Frame 등)
- 인라인 스타일 남발
```

### 3.3 효과적인 프롬프트 작성법

#### 기본 템플릿
```
Figma MCP를 사용해서 현재 선택된 디자인을 React 컴포넌트로 변환해주세요.

요구사항:
1. shadcn/ui 컴포넌트는 정확히 매칭되는 경우에만 사용
2. 레이아웃은 Tailwind CSS로 직접 구현
3. TypeScript 적용
4. 반응형 디자인 고려
5. 접근성 준수

변환 과정:
1. 이미지 확인으로 디자인 파악
2. 코드 생성 후 UI 요소 분석
3. 필요한 shadcn/ui 컴포넌트 설치
4. 최종 컴포넌트 파일 생성
```

## 4. 실전 Vibe Coding 워크플로우

### 4.1 탐색 → 계획 → 코딩 → 커밋 접근법

#### 1단계: 탐색 (Exploration)
```bash
# 프로젝트 구조 파악
tree src/
ls -la src/components/

# 기존 패턴 분석
"현재 프로젝트의 컴포넌트 패턴을 분석해주세요"
```

#### 2단계: 계획 (Planning)
```markdown
# Todo 작성 예시
- [ ] Figma 디자인에서 UI 요소 분석
- [ ] 필요한 shadcn/ui 컴포넌트 확인
- [ ] 반응형 브레이크포인트 설정
- [ ] 컴포넌트 파일 구조 설계
- [ ] 테스트 및 빌드 검증
```

#### 3단계: 코딩 (Coding)
```typescript
// 점진적 개발 예시
"먼저 기본 레이아웃만 구현해주세요"
→ 레이아웃 완성 후
"이제 버튼 컴포넌트를 shadcn/ui로 교체해주세요"
→ 기능 추가 후
"반응형 디자인을 적용해주세요"
```

#### 4단계: 커밋 (Commit)
```bash
# 자동 포맷팅 및 검증
yarn lint
yarn build

# 의미있는 커밋 메시지
git add .
git commit -m "feat: add login component with responsive design

- Implement Figma design with Tailwind CSS
- Use shadcn/ui for Button and Input components
- Add mobile-first responsive layout
- Include accessibility attributes"
```

### 4.2 반복적 개선 과정

#### 초기 프로토타입
```
"Figma 디자인의 기본 구조만 빠르게 구현해주세요"
→ 빠른 확인 가능한 MVP 생성
```

#### 점진적 개선
```
"버튼 호버 효과를 추가해주세요"
"로딩 상태를 시각적으로 표현해주세요"  
"에러 메시지 표시 기능을 추가해주세요"
```

#### 최종 완성
```
"코드 리뷰 및 최적화를 진행해주세요"
"접근성 개선사항이 있는지 확인해주세요"
```

## 5. 프로젝트별 적용 사례

### 5.1 현재 프로젝트 구조 분석

```
figma-code-generator/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── checkbox.tsx
│   │   ├── SignIn.tsx   # Figma → 코드 변환 결과
│   │   └── EmptyLandingSection.tsx
│   └── lib/
│       └── utils.ts     # Tailwind 유틸리티
```

### 5.2 shadcn/ui 컴포넌트 매핑 전략

#### 정확한 매칭이 있는 경우 ✅
```typescript
// Figma 버튼 → shadcn/ui Button
import { Button } from "@/components/ui/button"

<Button variant="default" size="lg">
  Sign In
</Button>
```

#### 커스텀 구현이 필요한 경우 ❌
```typescript
// Figma 커스텀 카드 → Tailwind CSS
<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">Title</h3>
      <p className="text-sm text-gray-500">Description</p>
    </div>
  </div>
</div>
```

## 6. 고급 Vibe Coding 기법

### 6.1 다중 에이전트 활용

```bash
# 병렬 작업 예시
Task 1: "컴포넌트 구조 분석" (analysis agent)
Task 2: "Figma 디자인 변환" (figma agent)  
Task 3: "테스트 코드 생성" (test agent)
```

### 6.2 시각적 개발 패턴

#### 스크린샷 활용
```
"첨부한 스크린샷과 동일한 레이아웃을 구현해주세요"
+ 스크린샷 첨부
```

#### 단계별 시각적 확인
```
"현재까지 구현된 결과를 보여주고, 다음 단계를 제안해주세요"
```

### 6.3 맥락 관리 전략

#### 프로젝트 메모리 활용
```
# 중요한 설계 결정사항 저장
"이 프로젝트는 모바일 퍼스트 접근을 사용합니다" #mobile-first

# 나중에 참조
"#mobile-first 방식으로 새 컴포넌트를 만들어주세요"
```

## 7. 문제해결 및 최적화

### 7.1 자주 발생하는 문제들

#### shadcn/ui 설치 문제
```bash
# 문제: 잘못된 경로에 생성
@/components/ui/button.tsx

# 해결: 올바른 경로로 이동
cp -r @/components/ui/* src/components/ui/
rm -rf @
```

#### 스타일 충돌 문제
```typescript
// 문제: shadcn/ui와 커스텀 스타일 충돌
<Button className="bg-blue-500"> // 적용 안됨

// 해결: 적절한 우선순위 설정  
<Button className="bg-blue-500 hover:bg-blue-600 !important">
```

### 7.2 성능 최적화

#### 컴포넌트 번들 최적화
```typescript
// 동적 import 활용
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// 필요할 때만 로드
{showHeavy && <Suspense><HeavyComponent /></Suspense>}
```

#### Tailwind CSS 최적화
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // 사용되는 파일만
  theme: {
    extend: {
      // 필요한 커스텀만 추가
    }
  }
}
```

## 8. 베스트 프랙티스 체크리스트

### 8.1 개발 시작 전

- [ ] CLAUDE.md 파일 생성 및 업데이트
- [ ] Figma 디자인 컴포넌트화 확인
- [ ] 필요한 shadcn/ui 컴포넌트 목록 파악
- [ ] 프로젝트 구조 이해

### 8.2 개발 중

- [ ] 명확하고 구체적인 프롬프트 작성
- [ ] 단계별 접근 (MVP → 개선)
- [ ] 정기적인 빌드 및 린트 체크
- [ ] 반응형 디자인 고려

### 8.3 개발 완료 후

- [ ] 접근성 검증
- [ ] 성능 최적화 확인
- [ ] 코드 리뷰 진행
- [ ] 의미있는 커밋 메시지 작성

## 9. 실제 명령어 모음

### 9.1 Figma 관련 명령어

```bash
# Figma 이미지 가져오기
mcp__figma-dev-mode-mcp-server__get_image

# Figma 코드 생성
mcp__figma-dev-mode-mcp-server__get_code

# 변수 정의 가져오기
mcp__figma-dev-mode-mcp-server__get_variable_defs
```

### 9.2 shadcn/ui 관련 명령어

```bash
# 컴포넌트 설치
yarn dlx shadcn@latest add button input checkbox label

# 모든 컴포넌트 확인
ls -la src/components/ui/

# 컴포넌트 초기화
yarn dlx shadcn@latest init
```

### 9.3 프로젝트 관리 명령어

```bash
# 개발 서버 실행
yarn dev

# 빌드 및 검증
yarn lint
yarn build

# Git 작업
git status
git diff
git add .
git commit -m "feat: meaningful message"
```

## 10. 결론

Vibe Coding은 단순히 AI에게 명령을 내리는 것이 아니라, AI와 협업하여 더 나은 코드를 만드는 방법론입니다. Figma MCP와 Claude Code를 활용하면 디자인부터 구현까지의 과정을 대폭 단축시킬 수 있으며, 일관성 있고 품질 높은 코드를 생성할 수 있습니다.

핵심은 **명확한 의도 전달**, **점진적 개선**, **반복적 피드백**입니다. AI가 당신의 개발 의도와 스타일을 파악할수록, 더욱 정교하고 만족스러운 결과물을 얻을 수 있습니다.

### 다음 단계

1. 이 가이드를 참고하여 첫 번째 Figma → 코드 변환 프로젝트 진행
2. 프로젝트별 CLAUDE.md 파일 작성 및 최적화
3. 팀 내 Vibe Coding 워크플로우 표준화
4. 더 복잡한 디자인 시스템 구축에 도전

Happy Vibe Coding! 🚀