import { useState } from "react";
import "./SeatBooking.css";

const initialSeats = ["A", "B", "C"].flatMap((row) =>
  Array.from({ length: 10 }, (_, i) => {
    const id = `${row}${i + 1}`;
    return { id, reserved: ["A4", "B2"].includes(id) };
  }),
);

function SeatBooking() {
  const [selectedSeats, setSelectedSeats] = useState(["A3", "C4", "B3"]);
  const [message, setMessage] = useState("");

  const handleSeatClick = (seat) => {
    if (seat.reserved) return;

    setSelectedSeats((prev) =>
      prev.includes(seat.id)
        ? prev.filter((id) => id !== seat.id)
        : [...prev, seat.id],
    );

    setMessage("");
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      setMessage("좌석을 먼저 선택해 주세요.");
      return;
    }

    setMessage(`선택한 좌석: ${selectedSeats.join(", ")}`);
  };

  return (
    <div className="booking-page">
      <h1>영화 좌석 예매</h1>
      <div className="screen">SCREEN</div>

      <div className="seat-grid">
        {initialSeats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${
              seat.reserved
                ? "reserved"
                : selectedSeats.includes(seat.id)
                  ? "selected"
                  : ""
            }`}
            disabled={seat.reserved}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.id}
          </button>
        ))}
      </div>

      <p className="selected-info">
        선택한 좌석: {selectedSeats.join(", ") || "없음"}
      </p>

      <button className="booking-button" onClick={handleBooking}>
        예매하기
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default SeatBooking;
