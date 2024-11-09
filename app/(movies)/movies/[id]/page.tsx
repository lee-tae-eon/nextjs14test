// * dinamic route test
// * props -> params, searchparams
export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h3>Movie #{id}</h3>;
}
