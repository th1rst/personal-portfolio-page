export const getTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const preferences = window.localStorage.getItem("darkMode");

    //dark mode is default
    if (!preferences) {
      return "dark";
    } else {
      return preferences;
    }
  }
};
