import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const res = await (await fetch(`${API_URL}/${id}`)).json();

  return res;
}
// * dinamic route test
// * props -> params, searchparams
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);

  return <h3>{movie.title}</h3>;
}
