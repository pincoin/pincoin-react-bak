import React from "react"

const App = () => {
  return (
    <div className="flex flex-col h-full">
      {/*  display: flex; flex-direction: column; height: 100%; */}
      <div className="bg-emerald-100">상단메뉴</div>
      <div className="flex flex-1">
        {/*  상단메뉴 아래 나머지 여백 모두 채움 */}
        <div className="flex flex-none bg-red-200">좌측메뉴</div>
        <div className="flex flex-1 bg-red-100">본문</div>
      </div>
    </div>
  )
}

export default App
