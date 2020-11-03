// https://github.com/Nodlik/react-pageflip adjusted to personal needs
import React from "react";
import HTMLFlipBook from "react-pageflip";
import LoadingSpinner from "../components/LoadingSpinner";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>{props.children}</div>
    </div>
  );
});

export default class BookPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      totalPages: 0,
      loading: true,
      userInput: "",
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      currentPage: e.data,
    });
  };

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });

    if (event.target.value !== "") {
      this.flipBook.getPageFlip().turnToPage(parseInt(event.target.value));
    }
  };

  returnPagelist = async (pages, name) => {
    const pageList = [];

    //create a list of all images (pages) to fetch
    for (let i = 1; i < pages; i++) {
      pageList.push(`https://kochannek.com/books/${name}/jpg/seite${i}.jpg`);
    }

    //wait for every image to load
    await Promise.all(pageList.map((url) => fetch(url))).then(
      this.setState({
        loading: false,
        pageList: pageList,
      })
    );
  };

  getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height);
    return {
      width,
      height,
    };
  }

  componentDidMount() {
    const { pageCount, bookShortName } = this.props.location.state;

    this.setState({ totalPages: pageCount });
    this.returnPagelist(pageCount, bookShortName);

    window.addEventListener("resize", this.getWindowDimensions);
  }

  componentDidUpdate() {
    this.getWindowDimensions();
  }

  render() {
    const { loading, userInput, totalPages, pageList } = this.state;
    const { coverURL } = this.props.location.state;

    return (
      <div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-screen h-screen p-8">
            <HTMLFlipBook
              width={550}
              height={733}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1000}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={this.onPage}
              onChangeOrientation={this.onChangeOrientation}
              onChangeState={this.onChangeState}
              ref={(el) => (this.flipBook = el)}
            >
              <PageCover>
                <img src={coverURL} alt="cover" key="cover" />
              </PageCover>

              {pageList.map((image, index) => (
                <Page number={index}>
                  <img src={image} alt={`page${index}`} key={index} />
                </Page>
              ))}

              <PageCover>THE END</PageCover>
            </HTMLFlipBook>
            <div className="w-2/3 mx-auto h-20 border-2 border-red-500 flex flex-row justify-around items-center">
              <div>
                <button
                  className="w-28 h-10 border-2 border-blue-500 bg-gray-500 font-semibold uppercase"
                  type="button"
                  onClick={this.prevButtonClick}
                >
                  Previous
                </button>
              </div>

              <div>
                <span className="px-2 py-1 bg-white border-2 border-gray-800">
                  Go to Page{" "}
                  <input
                    className="border w-12 border-black bg-gray-500"
                    name="currentPage"
                    type="input"
                    value={userInput}
                    placeholder={userInput}
                    onChange={this.handleInput}
                  />{" "}
                  of {totalPages}
                </span>
              </div>

              <div>
                <button
                  className="w-28 h-10 border-2 border-blue-500 bg-gray-500 font-semibold uppercase"
                  type="button"
                  onClick={this.nextButtonClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
