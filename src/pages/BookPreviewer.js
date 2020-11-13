// https://github.com/Nodlik/react-pageflip adjusted to personal needs
import React from "react";
import HTMLFlipBook from "react-pageflip";
import LoadingSpinner from "../components/LoadingSpinner";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { BookList } from "../assets/data/BookList";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-density="hard">
      <div className="cursor-pointer">{props.children}</div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="cursor-pointer">{props.children}</div>
    </div>
  );
});

export default class BookPreviewer extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      totalPages: 0,
      loading: true,
      userInput: "",
      bookName: "",
    };
  }

  componentDidMount() {
    this.findBookFromURL();
  }

  findBookFromURL = () => {
    const slug = this.props.match.params.slug;

    BookList.forEach((book) => {
      if (book.shortName === slug) {
        this.getBookContent(book.pageCount, book.shortName, book.coverURL);
      }
    });
  };

  getBookContent = async (pages, name, cover) => {
    const pageList = [];

    //create a list of all images (pages) to fetch
    for (let i = 1; i < pages; i++) {
      pageList.push(`https://kochannek.com/books/${name}/jpg/seite${i}.jpg`);
    }

    //wait for every image to load
    await Promise.all(pageList.map((url) => fetch(url))).then(() =>
      this.setState({
        loading: false,
        pageList: pageList,
        coverURL: cover,
        totalPages: pages,
      })
    );
  };

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

  render() {
    const { loading, userInput, totalPages, pageList, coverURL } = this.state;
    const { theme } = this.context;

    return (
      <div
        className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* CONTAINER FOR NAVIGATION ELEMENTS */}
            <div className="relative flex justify-center">
              <div className="absolute top-0 w-2/3 h-16 flex flex-row justify-around items-center">
                <div>
                  <MdNavigateBefore
                    size={32}
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } cursor-pointer`}
                    onClick={this.prevButtonClick}
                  />
                </div>

                <div>
                  <span
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } px-2 py-1 font-semibold uppercase tracking-wide`}
                  >
                    <Text tid="goToPage" />
                    <input
                      className={`${
                        theme === "dark" ? "bg-gray-200" : "bg-gray-400"
                      } text-black mx-2 w-10 rounded-lg text-center`}
                      name="currentPage"
                      type="input"
                      value={userInput}
                      placeholder={userInput}
                      onChange={this.handleInput}
                    />
                    <Text tid="of" /> {totalPages}
                  </span>
                </div>

                <div>
                  <MdNavigateNext
                    size={32}
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } cursor-pointer`}
                    onClick={this.nextButtonClick}
                  />
                </div>
              </div>
            </div>
            {/* FLIPBOOK CONTAINER */}
            <div className="w-screen h-2/3 p-8 mt-8 flex justify-content">
              <HTMLFlipBook
                className="mx-auto"
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
            </div>
            <div className="mt-8 mx-16 border border-gray-900" />
          </>
        )}
      </div>
    );
  }
}
