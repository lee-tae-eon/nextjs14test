// * page or layout 만 metadata 를 내보낼 수 있다.
// * metadata 는 서버 컴포넌트에만 있을 수 있다.
export const metadata = {
  title: "Home Title",
  description: "Text nextjs metadata",
};

export default function RootPage() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

/**
 * * route group 은 (home) 소괄호 형식으로 묶어줘야한다
 * * 소괄호로 묶은 경우 route로 인식 하지 않는다
 * * layout, not-found 는 모든 페이지에 공유
 * */
