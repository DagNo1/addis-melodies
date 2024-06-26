// import { Button } from "theme-ui";
// import { useGetPostByIdQuery } from "./services/apiService";
import NavBar from "./components/navbar/navBar";
import SongsList from "./layouts/songsList";

function App() {
  // const { data, error, isLoading } = useGetPostByIdQuery("1");
  console.log(import.meta.env.VITE_EXAMPLE_API_BASE_URL);
  return (
    <>
      <NavBar />
      {/* <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <h3>
              Here is the post Id {data.id} and here is the user Id{" "}
              {data.userId}
            </h3>
            <Button variant="main">Hello</Button>
          </>
        ) : null}
      </div> */}
      <SongsList/>
    </>
  );
}

export default App;
