import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Payment buttons") => {
  const eventTracker = (action = "purchase", label = "payment CTA") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;