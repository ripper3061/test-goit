import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import { Loader } from "../../components/Loader/Loader";
import { fetchTweetsApi } from "../../utils/api";
import { Button } from "../../components/Button/Button";
import { BackToLink } from "../../components/BackToLink/BackToLink";
import { useLocation } from "react-router-dom";
import { Container, ButtonLayout } from "./TweetsPage.styled";
import { Dropdown } from "../../components/Dropdown/Dropdown";

export default function TweetsPage() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);

      try {
        const fetchedTweets = await fetchTweetsApi(page, value);

        if (fetchedTweets === []) return;
        setTweets((prevTweets) => {
          if (fetchedTweets.length !== 3) setIsEnd(true);
          if (fetchedTweets.length >= 3) setIsEnd(false);

          return page === 1 ? fetchedTweets : [...prevTweets, ...fetchedTweets];
        });

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
  }, [page, value]);

  const handleClickOnLoadBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClickOnDropdown = (value) => {
    setValue(value);
    setPage(1);
  };

  const shownLoadMoreBtn = !loading && tweets.length !== 0 && !isEnd;

  const location = useLocation();
  const backToLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <ButtonLayout>
        <BackToLink to={backToLinkHref}>Go back</BackToLink>
        <Dropdown data={tweets} handleClickOnDropdown={handleClickOnDropdown} />
      </ButtonLayout>

      {error && tweets.length === 0 && <p>{error}</p>}
      <CardList data={tweets} />
      {loading && <Loader loading={loading} />}
      {shownLoadMoreBtn && <Button onClick={handleClickOnLoadBtn} />}
    </Container>
  );
}
