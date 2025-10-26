import Container from "./Container";
import { Timeline } from "../components";

const TimelinePage = () => {
  return (
    <Container
      title="Timeline Component"
      description="Displays a list of events in chronological order"
    >
      {/* Default Timeline */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">
          Default Timeline (Left Position)
        </h2>
        <Timeline>
          <Timeline.Item
            title="User signs up"
            time="2023-01-15 10:00 AM"
            dotColor="success"
          >
            A new user account was created.
          </Timeline.Item>
          <Timeline.Item
            title="Profile updated"
            time="2023-01-15 10:05 AM"
            dotColor="info"
          >
            User updated their profile information.
          </Timeline.Item>
          <Timeline.Item
            title="First order placed"
            time="2023-01-16 02:30 PM"
            dotColor="primary"
          >
            User made their first purchase.
          </Timeline.Item>
        </Timeline>
      </section>

      {/* Right Position Timeline */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold dark:text-white mb-2">
          Right Position
        </h2>
        <Timeline position="right" lineColor="warning">
          <Timeline.Item
            title="Shipment processing"
            time="Yesterday"
            dotColor="warning"
          >
            The package is being prepared for shipment.
          </Timeline.Item>
          <Timeline.Item
            title="Out for delivery"
            time="Today, 9:00 AM"
            dotColor="info"
          >
            The package is on its way to the destination.
          </Timeline.Item>
          <Timeline.Item
            title="Delivery attempt failed"
            time="Today, 2:15 PM"
            dotColor="error"
          >
            Recipient was not available at the address.
          </Timeline.Item>
        </Timeline>
      </section>

      {/* Split Position with Icons */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold dark:text-white mb-2">
          Split Position with Icons
        </h2>
        <Timeline position="split" lineColor="primary">
          <Timeline.Item
            dotColor="primary"
            title="Application UI code in Tailwind CSS"
            time="February 2022"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            }
          >
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Item>
          <Timeline.Item
            dotColor="info"
            title="Marketing UI design in Figma"
            time="March 2022"
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
              </svg>
            }
          >
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Item>
          <Timeline.Item
            dotColor="success"
            title="E-Commerce UI code in Tailwind CSS"
            time="April 2022"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
              >
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            }
          >
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Item>
        </Timeline>
      </section>
    </Container>
  );
};

export default TimelinePage;
