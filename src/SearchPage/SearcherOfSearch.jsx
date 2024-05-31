import { useDispatch} from "react-redux";
import { fetchPhotoListThunk } from "../App/Features/search/searchThunk";
import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";
import Media from "react-media";

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
          <Media query="only screen and (min-width: 1000px) ">
              {matches => {
                return matches ? null : <LinkButtons theme={theme}/>
              }}
            </Media>
        </SearcherContainer>
        <Media query="only screen and (min-width: 1000px) ">
            {matches => {
              return matches ? <LinkButtons theme={theme}/>: null
            }}
        </Media>
      </SearcherZone>
    </>
  )
}

export default SearcherOfSearch;