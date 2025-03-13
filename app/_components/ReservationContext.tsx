"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initalState = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);
  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
}
export default ReservationProvider;
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
export { useReservation, ReservationProvider };
