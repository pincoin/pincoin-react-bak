import React from "react"

import {
  MdLogin,
  MdLogout,
  MdMenu,
  MdPersonAddAlt1,
  MdSettings,
} from "react-icons/md"

const App = () => {
  return (
    <div className="flex flex-col h-full">
      {/*  display: flex; flex-direction: column; height: 100%; */}
      <nav className="flex sticky top-0 p-4 bg-emerald-100">
        {/*  고정 상단메뉴 */}
        <div className="flex-none flex items-center text-xl">
          <MdMenu />
        </div>
        <div className="flex-none pl-2 flex items-center">
          <div className="flex-none">핀코인 관리자</div>
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
      <div className="flex-1 flex">
        {/*  상단메뉴 아래 나머지 여백 모두 채움 */}
        <aside className="flex-none flex flex-col">
          <ul className="flex-1">
            <li className="flex-none p-2">핀코인 주문</li>
            <li className="flex-none p-2">네이버 주문</li>
            <li className="flex-none p-2">고객문의</li>
            <li className="flex-none p-2">고객관리</li>
            <li className="flex-none p-2">재고관리</li>
            <li className="flex-none p-2">매출관리</li>
            <li className="flex-none p-2">이동</li>
          </ul>
          <div className="flex-none p-4 text-gray-700 bg-gray-100">
            로그인: username
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <div className="p-2">본문</div>
          <footer className="mt-auto text-center p-4 text-gray-500 bg-gray-200">
            Copyright © 2012-{new Date().getFullYear()} pincoin.co.kr All Rights
            Reserved.
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
