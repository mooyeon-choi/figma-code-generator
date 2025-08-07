# Figma to Code 변환 프롬프트

## 목적
Figma 디자인을 React + shadcn/ui + Tailwind CSS로 변환하는 프롬프트

## 핵심 원칙

### shadcn/ui 컴포넌트 사용 기준
shadcn/ui 컴포넌트는 **정확히 대응되는 UI 패턴이 있을 때만** 사용합니다:

✅ **shadcn/ui 컴포넌트를 사용하는 경우:**
- Button: 클릭 가능한 버튼 (primary, secondary, outline, ghost 등)
- Input: 텍스트 입력 필드
- Checkbox: 체크박스
- Radio: 라디오 버튼
- Select: 드롭다운 선택
- Dialog/Modal: 모달 다이얼로그
- Dropdown Menu: 드롭다운 메뉴
- Toast: 토스트 알림
- 기타 shadcn/ui에서 제공하는 명확한 컴포넌트

❌ **Tailwind CSS로 직접 구현하는 경우:**
- 단순한 레이아웃 컨테이너
- 커스텀 카드 디자인
- 특수한 배경이나 장식 요소
- 애니메이션 효과
- 그리드/플렉스 레이아웃
- 커스텀 스타일의 텍스트/타이틀
- shadcn/ui에 없는 UI 패턴

## 프롬프트 템플릿

### 1. Figma 디자인 분석 및 코드 생성

```
Figma MCP를 사용하여 현재 선택된 디자인을 React 컴포넌트로 변환해주세요.

요구사항:
1. shadcn/ui 컴포넌트는 정확히 매칭되는 경우에만 사용
2. 나머지는 Tailwind CSS로 직접 구현
3. TypeScript 사용
4. 반응형 디자인 고려
5. 접근성(a11y) 준수

변환 단계:
1. mcp__figma-dev-mode-mcp-server__get_image로 디자인 이미지 가져오기
2. mcp__figma-dev-mode-mcp-server__get_code로 생성된 코드 가져오기
3. UI 요소 분석:
   - shadcn/ui에 대응되는 컴포넌트 확인
   - 커스텀 요소는 Tailwind로 구현 계획
4. 필요한 shadcn/ui 컴포넌트 확인 및 설치:
   - src/components/ui 디렉토리 확인
   - 없는 컴포넌트는 yarn dlx shadcn@latest add [component] 실행
   - 잘못된 경로(@/)에 생성된 경우 올바른 경로로 이동
5. 컴포넌트 파일 생성 및 App.tsx에 연결
```

### 2. 컴포넌트 매핑 가이드

```
Figma 요소 → 구현 방법 결정:

1. shadcn/ui 컴포넌트 사용:
   - 버튼 (표준 스타일) → Button
   - 텍스트 입력 필드 → Input
   - 체크박스 → Checkbox
   - 라디오 버튼 → RadioGroup
   - 토글 스위치 → Switch
   - 슬라이더 → Slider
   - 드롭다운 → Select
   - 모달 → Dialog
   - 툴팁 → Tooltip
   - 탭 → Tabs

2. Tailwind CSS로 구현:
   - 커스텀 카드/컨테이너 → div + Tailwind 클래스
   - 레이아웃 그리드 → grid/flex 유틸리티
   - 커스텀 배경/장식 → bg-*, border-* 등
   - 애니메이션 → transition-*, animate-*
   - 그림자 효과 → shadow-*
   - 커스텀 폰트/텍스트 스타일 → text-*, font-*
```

### 3. 스타일링 규칙

```
Tailwind CSS 사용 원칙:

1. Figma 스타일 → Tailwind 변환:
   - 색상: Figma 색상 → 가장 가까운 Tailwind 색상 또는 커스텀
   - 간격: Figma px → Tailwind spacing (4px = 1, 8px = 2, 16px = 4 등)
   - 폰트 크기: Figma px → Tailwind text-{size}
   - 그림자: Figma shadow → Tailwind shadow-{size}
   - 둥근 모서리: Figma radius → Tailwind rounded-{size}

2. 커스텀 스타일이 필요한 경우:
   - style 속성 최소화
   - Tailwind arbitrary values 사용: bg-[#특정색상]
   - 복잡한 그라디언트나 특수 효과만 style 사용

3. 색상 시스템:
   - shadcn/ui 컴포넌트: CSS 변수 사용 (--primary, --secondary 등)
   - 커스텀 요소: Tailwind 색상 클래스 직접 사용
```

### 4. 실제 구현 예시

```tsx
// ❌ 잘못된 예시: 모든 것을 shadcn/ui로 구현
<Card>
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
</Card>

// ✅ 올바른 예시: 커스텀 레이아웃은 Tailwind로
<div className="bg-white rounded-lg shadow-sm p-6">
  <h1 className="text-3xl font-bold mb-2">Sign in</h1>
  <p className="text-gray-500 mb-6">Welcome back</p>
  
  {/* shadcn/ui는 정확히 매칭되는 컴포넌트만 */}
  <Input placeholder="Email" />
  <Button>Sign in</Button>
</div>
```

### 5. 반응형 디자인 적용

```
모바일 우선 접근법:

1. 기본(모바일) → 태블릿(md:) → 데스크톱(lg:)
2. 레이아웃 변경점:
   - 모바일: 세로 정렬, 전체 너비
   - 태블릿: 일부 가로 정렬 시작
   - 데스크톱: 완전한 가로 레이아웃

예시:
<div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
  <div className="w-full lg:w-1/2">...</div>
  <div className="hidden lg:block lg:w-1/2">...</div>
</div>
```

### 6. 이미지 및 아이콘 처리

```
1. 아이콘:
   - Figma 아이콘 → lucide-react 매칭
   - 없는 경우 SVG로 직접 구현

2. 이미지:
   - 배경: className="bg-cover bg-center"
   - img 태그: className="w-full h-auto object-cover"

3. 장식 요소:
   - 단순 도형 → Tailwind 유틸리티
   - 복잡한 그래픽 → SVG 또는 이미지
```

## 실제 사용 예시

```
"Figma MCP를 사용해서 현재 선택된 화면을 생성해주세요. 
주의사항:
- shadcn/ui 컴포넌트는 Button, Input, Checkbox 등 정확히 매칭되는 것만 사용
- 레이아웃, 카드, 컨테이너 등은 Tailwind CSS로 직접 구현
- 커스텀 디자인 요소는 모두 Tailwind 클래스로 스타일링"
```

### shadcn/ui 컴포넌트 설치 프로세스

```bash
# 1. 필요한 컴포넌트 확인
ls -la src/components/ui/

# 2. 없는 컴포넌트 설치
yarn dlx shadcn@latest add button input checkbox label

# 3. 잘못된 경로에 생성된 경우 수정
# @/components/ui에 생성된 경우:
cp -r @/components/ui/* src/components/ui/
rm -rf @

# 4. 컴포넌트 사용
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
```

## 체크리스트

구현 전 확인사항:
- [ ] Figma 요소가 shadcn/ui 컴포넌트와 정확히 매칭되는가?
- [ ] 필요한 shadcn/ui 컴포넌트가 설치되어 있는가?
- [ ] 커스텀 레이아웃을 Tailwind로 구현할 계획이 있는가?
- [ ] 불필요한 shadcn/ui 컴포넌트를 사용하고 있지 않은가?
- [ ] Tailwind 클래스로 충분히 구현 가능한데 style을 사용하고 있지 않은가?

## 주의사항

1. **shadcn/ui 컴포넌트 설치 필수**
   - 사용하려는 컴포넌트가 없으면 먼저 설치
   - 설치 후 import 경로 확인 (@/components/ui/...)

2. **스타일 오버라이드**
   - shadcn/ui 컴포넌트의 기본 스타일을 className으로 오버라이드 가능
   - 예: `<Button className="bg-neutral-900 hover:bg-neutral-800">`

3. **Figma 색상 매핑**
   - neutral-950 → 매우 진한 회색/검정
   - neutral-500 → 중간 회색
   - neutral-50 → 매우 연한 회색/흰색