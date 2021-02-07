// https://github.com/Nodlik/react-pageflip adjusted to personal needs
// (cannot be converted to functional component)

import React from "react";
import HTMLFlipBook from "react-pageflip";
import { ProgressBar } from "react-rainbow-components";
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
      alreadyLoadedPage: 1,
      loadingPercent: 0,
      userInput: "",
      bookName: "",
    };
  }

  componentDidMount() {
    this.findBookFromURL();
  }

  findBookFromURL = () => {
    // Find Book data with only the Slug passed as props.
    // Slug hast to be specified exactly like Book.shortName
    // (found in /data/BookList.js)
    const slug = this.props.match.params.slug;

    BookList.forEach((book) => {
      if (book.shortName === slug) {
        this.setState({ totalPages: book.pageCount });
        this.getBookContent(book.pageCount, book.shortName, book.coverURL);
      }
    });
  };

  getBookContent = async (pages, name, cover) => {
    const pageList = [];

    // create a list of all pages (JPEG images) to fetch
    for (let i = 1; i < pages; i++) {
      pageList.push(`https://kochannek.com/books/${name}/jpg/seite${i}.jpg`);
    }

    // wait for it to have FULLY loaded, update the "Loading" percent
    const asd = pageList.map(async (url) => {
      await this.finishImageLoading(url).then(() => {
        this.setState({
          alreadyLoadedPage: this.state.alreadyLoadedPage + 1,
        });
        this.calculateLoadingPercent(this.state.alreadyLoadedPage);
      });
    });

    // if everything is done, remove the loading flag and show content
    await Promise.all(asd).then(() => {
      this.setState({
        loading: false,
        pageList: pageList,
        coverURL: cover,
        totalPages: pages,
      });
    });
  };

  finishImageLoading(url) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = url;
    });
  }

  calculateLoadingPercent = (currentPage) => {
    const onePercent = this.state.totalPages / 100;
    const rest = Math.trunc(currentPage / onePercent);

    this.setState({ loadingPercent: rest });
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
    const {
      loading,
      userInput,
      totalPages,
      pageList,
      coverURL,
      alreadyLoadedPage,
    } = this.state;
    const { theme } = this.context;

    return (
      <div
        className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
      >
        {loading ? (
          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } h-screen w-full flex flex-col justify-center items-center text-center`}
          >
            <div className="w-1/3">
              <p>
                Loading Page {alreadyLoadedPage} of {totalPages}
              </p>
              <ProgressBar value={this.state.loadingPercent} />
              <p className="font-bold uppercase">
                {this.state.loadingPercent}%{" "}
              </p>
            </div>
          </div>
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
                    } py-1 font-semibold uppercase tracking-wide`}
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
