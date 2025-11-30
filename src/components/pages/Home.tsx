import { Introduction } from "../Introduction";
import { JoinUs } from "../JoinUs";
import { WeddingDetails } from "../WeddingDetails";
import { OurStory } from "../OurStory";
import { RSVP } from "../RSVP";
import { CountdownTimer } from "../CountdownTimer";

export const Home = () => {
  return (
    <>
      <Introduction />
      <CountdownTimer />
      <JoinUs />
      <WeddingDetails />
      <OurStory />
      <RSVP />
    </>
  );
};
