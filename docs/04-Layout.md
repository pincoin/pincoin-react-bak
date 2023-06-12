```
<div className="flex flex-col h-full">
      {/*  display: flex; flex-direction: column; height: 100%; */}
      <nav className="flex sticky top-0 p-4 bg-emerald-100 shadow-sm">
        {/*  고정 상단메뉴 */}
        <div className="flex-none flex items-center text-xl">
          <MdMenu />
        </div>
        <div className="flex-none pl-4 flex items-center">
          <div className="flex-none text-lg font-bold">핀코인 관리자</div>
        </div>
        <div className="flex-none ml-auto flex items-center justify-between text-xl">
          {/*  상단메뉴 우측 아이콘 오른쪽 정렬 */}
          <div className="flex-none">
            <MdLogin />
          </div>
          <div className="flex-none">
            <MdLogout />
          </div>
          <div className="flex-none">
            <MdPersonAddAlt1 />
          </div>
          <div className="flex-none">
            <MdSettings />
          </div>
        </div>
      </nav>
    </div>
```

## 헤더 + [사이드바 + 본문] + 푸터
```jsx
<>
  <header className="sticky top-0 bg-amber-100">헤더</header>
    <div className="flex-1 flex">
      <aside>
        <ul>사이드바</ul>
      </aside>
      <main>본문</main>
    </div>
  <footer className="sticky bottom-0 bg-amber-100">푸터</footer>
</>
```
```css
html, body {
    height: 100%;
}

#root {
    min-height: 100vh; /* height 가 아니라 min-height 인 것에 주의 */
    display: flex;
    flex-direction: column;
}
```

## 헤더 + [[사이드바 + 푸터] + [본문 + 푸터]]
```jsx
    <>
  <header className="sticky top-0 bg-amber-100">헤더</header>
  <div className="flex-1 flex">
    <aside className="flex flex-col">
      <ul className="flex-1">사이드바</ul>
      <div className="sticky bottom-0 text-gray-700 bg-gray-100">
        사이드푸터
      </div>
    </aside>
    <main className="flex-1 flex flex-col">
      <div className="flex-1">본문</div>
      <footer className="bg-amber-100">푸터</footer>
    </main>
  </div>
</>
```
