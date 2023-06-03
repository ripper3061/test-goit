import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import { Loader } from "../../components/Loader/Loader";
import { fetchTweetsApi } from "../../utils/api";
import { Button } from "../../components/Button/Button";
import { BackToLink } from "../../components/BackToLink/BackToLink";
import { useLocation } from "react-router-dom";
import { Container } from "./TweetsPage.styled";

export default function TweetsPage() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  console.log(tweets);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);

      try {
        const fetchedTweets = await fetchTweetsApi(page);
        if (fetchedTweets === []) return;
        setTweets((prevImages) => [...prevImages, ...fetchedTweets]);

        if (fetchedTweets === 0) {
          setError("Sorry, there are no tweets.");
        }
      } catch {
        setError("Ops, failed to load. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [page]);

  const handleClickOnLoadBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shownLoadMoreBtn = !loading && tweets.length !== 0;

  const location = useLocation();
  const backToLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <BackToLink to={backToLinkHref}>Go back</BackToLink>
      {error && tweets.length === 0 && <p>{error}</p>}
      <CardList data={tweets} />
      {loading && <Loader loading={loading} />}
      {shownLoadMoreBtn && <Button onClick={handleClickOnLoadBtn} />}
    </Container>
  );
}
