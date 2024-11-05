export const metadata = {
  title: "Home | Home test",
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
