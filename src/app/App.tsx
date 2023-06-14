import React from "react"
import {
  MdLogin,
  MdLogout,
  MdMenu,
  MdPersonAdd,
  MdSettings,
} from "react-icons/md"

const App = () => {
  return (
    <>
      <header className="sticky top-0 bg-teal-100 shadow-md">
        <nav className="flex justify-between p-4">
          <div className="inline-flex text-lg justify-center items-center">
            <div className="">
              <MdMenu />
            </div>
            <div className="pl-4 font-bold">핀코인 관리자</div>
            <div className="pl-4">검색창</div>
          </div>
          <div className="flex justify-center items-center">
            <a href="#">
              <span className="inline-block align-middle mr-1">
                <MdPersonAdd />
              </span>
              <span className="inline-block align-middle">회원가입</span>
            </a>
            <a href="#" className="pl-4">
              <span className="inline-block align-middle mr-1">
                <MdLogin />
              </span>
              <span className="inline-block align-middle">로그인</span>
            </a>
            <a href="#" className="pl-4">
              <span className="inline-block align-middle mr-1">
                <MdSettings />
              </span>
              <span className="inline-block align-middle">설정</span>
            </a>
            <a href="#" className="pl-4">
              <span className="inline-block align-middle mr-1">
                <MdLogout />
              </span>
              <span className="inline-block align-middle">로그아웃</span>
            </a>
          </div>
        </nav>
      </header>
      <div className="flex-1 flex">
        <aside className="flex flex-col bg-teal-50">
          <ul className="flex-1 p-2 mr-4">
            <li className="pl-1 mb-3 font-bold">핀코인 주문</li>
            <li className="pl-1 mb-3 font-bold">네이버 주문</li>
            <li className="pl-1 mb-2 font-bold">고객문의</li>
            <li className="p-1 font-bold">고객관리</li>
            <ul className="ml-1 mb-1 p-1 border-l-2">
              <li className="pl-1 mb-2">신규고객</li>
              <li className="pl-1 mb-2">기존고객</li>
              <li className="pl-1">SMS 내역</li>
            </ul>
            <li className="p-1 font-bold">재고관리</li>
            <ul className="ml-1 mb-1 p-1 border-l-2">
              <li className="pl-1 mb-2">잔여수량</li>
              <li className="pl-1 mb-2">일괄등록</li>
              <li className="pl-1 mb-2">발주내역</li>
              <li className="pl-1">현재잔액</li>
            </ul>
            <li className="p-1 font-bold">매출관리</li>
            <ul className="ml-1 p-1 border-l-2">
              <li className="pl-1 mb-2">일일매출</li>
              <li className="pl-1 mb-2">월간매출</li>
              <li className="pl-1 mb-2">베스트셀러(제품군)</li>
              <li className="pl-1 mb-2">베스트셀러(보고서)</li>
              <li className="pl-1 mb-2">결제수단별 일매출</li>
              <li className="pl-1">우수고객</li>
            </ul>
          </ul>
          <div className="sticky bottom-0 p-4 text-gray-700 bg-gray-100">
            로그인: username
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-2">본문</div>
          <footer className="p-4 text-center text-gray-500 bg-gray-200">
            Copyright © 2012-{new Date().getFullYear()} pincoin.co.kr All Rights
            Reserved.
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
