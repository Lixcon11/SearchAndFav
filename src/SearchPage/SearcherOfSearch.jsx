import { useDispatch} from "react-redux";
import { fetchPhotoListThunk } from "../App/Features/search/searchThunk";
import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";

const SearcherOfSearch= () => {
  const dispatch = useDispatch();
  const theme = "--searchTheme";
  const placeholder = "Search new images"

  const formEventHandler = event => {
    event.preventDefault();
    dispatch(fetchPhotoListThunk(event.target.input.value))
  }

  return (
    <>
      <SearcherZone theme={theme}>
        <Title/>
        <SearcherContainer>
          <Searcher handler={formEventHandler} placeholder={placeholder}/>
          <LinkButtons theme={theme}/>
        </SearcherContainer>
      </SearcherZone>
    </>
  )
}

export default SearcherOfSearch;