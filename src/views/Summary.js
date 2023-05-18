import EventSummaryBlock from "../components/EventSummaryBlock";
import NewEventDialog from "../components/NewEventDialog";
import { useState } from "react";
import Detail from "./Detail";
import NewEventBlock from "../components/NewEventBlock";

function Summary() {
  const [eventList, setEventList] = useState([]);
  const [showNewEventDialog, setShowNewEventDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getSumOfValuesWithoutDrink = (peopleArray) => {
    let sum = peopleArray.reduce(
      (acc, person) => acc + parseInt(person.valueWithoutDrink),
      0
    );
    return sum;
  };

  const createNewEvent = (title, date, info, peopleArray) => {
    setEventList((oldArray) => [
      ...oldArray,
      {
        title: title,
        date: date,
        info: info,
        people: peopleArray,
      },
    ]);
    setShowNewEventDialog(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        zIndex: "10",
      }}
    >
      {showNewEventDialog && (
        <NewEventDialog
          onClickOutside={() => setShowNewEventDialog(false)}
          onCreateNewEvent={createNewEvent}
        />
      )}

      <div
        style={{
          width: "100%",
          height: "30%",
          zIndex: "10",
        }}
      ></div>
      <div
        style={{
          background: "#FAFAFA",
          width: "100%",
          height: "70%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          zIndex: "10",
        }}
      >
        {eventList.map((event, index) => {
          return (
            <EventSummaryBlock
              key={index}
              date={event.date}
              title={event.title}
              numberOfPeople={event.people.length}
              value={getSumOfValuesWithoutDrink(event.people)}
              onClick={() => {
                setSelectedEvent(index);
              }}
            />
          );
        })}

        <NewEventBlock onClick={() => setShowNewEventDialog(true)} />
      </div>
    </div>
  );
}

export default Summary;
