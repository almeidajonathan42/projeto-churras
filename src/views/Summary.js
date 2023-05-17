import bbqIconCircle from "../assets/bbqIconCircle.svg";
import EventSummaryBlock from "../components/EventSummaryBlock";
import NewEventDialog from "../components/NewEventDialog";
import { useState } from "react";

function Summary() {
  const [eventList, setEventList] = useState([]);
  const [showNewEventDialog, setShowNewEventDialog] = useState(false);

  const getSumOfValuesWithoutDrink = (peopleArray) => {
    let sum = peopleArray.reduce((acc, person) => acc + parseInt(person.valueWithoutDrink), 0);
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
            />
          );
        })}

        <div
          style={{
            width: "282px",
            height: "192px",
            background: "#F1F1F1",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "2px",
            padding: "21px 24px 32px 24px",
            margin: "12px 0 12px 12px",
            position: "relative",
            bottom: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
          onClick={() => setShowNewEventDialog(true)}
        >
          <img
            src={bbqIconCircle}
            style={{ height: "90px", marginBottom: "8px" }}
            alt="barbecue icon"
          />

          <p
            style={{
              font: "Raleway",
              fontWeight: "700",
              fontSize: "21px",
              color: "#000000",
              margin: 0,
            }}
          >
            Adicionar Churras
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
