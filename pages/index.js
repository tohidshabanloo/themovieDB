import Head from "next/head";
import Image from "next/image";
import { useAxios } from "../hooks/useAxios";
import styles from "../styles/Home.module.css";

const baseUrl = "https://api.themoviedb.org/3/";
const moviesEndpoint = "movie/now_playing";
const tvEndpoint = "tv/airing_today";
const token = "301b07456b1452abbdda1e23bf72876d";

export default function Home() {
  const [moviesRes, fetchMovies] = useAxios();
  const [tvRes, fetchTv] = useAxios();
  useEffect(() => {
    fetchMovies(baseUrl + moviesEndpoint + "?api_key=" + token);
    fetchTv(baseUrl + tvEndpoint + "?api_key=" + token);
  }, []);


  return <h2> First Page</h2>;
}
