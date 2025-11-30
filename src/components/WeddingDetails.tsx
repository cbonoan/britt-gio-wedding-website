import { TimeDetails } from "./TimeDetails";
import { VenueDetails } from "./VenueDetails";
import "../styles/WeddingDetails.scss";

export function WeddingDetails() {
  return (
    <section id="wedding-details">
      <TimeDetails />
      <VenueDetails />
    </section>
  );
}
