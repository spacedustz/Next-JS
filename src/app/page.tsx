import {FC} from "react";
import Link from "next/link";

const Home: FC = () => {
    return (
        <main>
            {/* 로고 이미지 */}
            <img src="/logo.png" alt="A server surrounded by magic sparkles."/>

            <h1>Welcome to this NextJS Course!</h1>
            <p>
                🔥 Let&apos;s get started! 🔥
            </p>

            {/*
                ==== 페이지 링크 ====

                1. SPA가 아님:
                    - 페이지 로딩 시간이 있음
                    - a 태그의 href 속성 사용

                2. SPA 유지:
                    - 클라이언트 사이드 네비게이션
                    - Link 컴포넌트 사용
            */}
            {/*<p><a href="/about">About App</a></p>*/}
            <Link href="/about">About Us</Link>
        </main>
    );
};

export default Home;