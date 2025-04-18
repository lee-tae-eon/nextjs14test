import Link from "next/link";

export const metadata = {
  title: "Home Title",
  description: "Text nextjs metadata",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/**
 * ! server components
 *
 */
async function getMovies() {
  // 강제 로딩
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await (await fetch(API_URL)).json();

  return res;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

/**
 * ! 클라이언트 사이드 방식
 */
// "use client";
// import { useEffect, useState } from "react";

// * page or layout 만 metadata 를 내보낼 수 있다.
// * metadata 는 서버 컴포넌트에만 있을 수 있다.
// export const metadata = {
//   title: "Home Title",
//   description: "Text nextjs metadata",
// };

// export default function RootPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function getMovies() {
//       const response = await fetch(
//         "https://nomad-movies.nomadcoders.workers.dev/movies"
//       );

//       const json = await response.json();

//       setMovies(json);
//       setIsLoading(false);
//     }

//     getMovies();
//   }, [setMovies, setIsLoading]);

//   return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
// }

/**
 * * route group 은 (home) 소괄호 형식으로 묶어줘야한다
 * * 소괄호로 묶은 경우 route로 인식 하지 않는다
 * * layout, not-found 는 모든 페이지에 공유
 * */
