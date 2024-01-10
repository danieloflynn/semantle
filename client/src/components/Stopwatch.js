import { useStopwatchContext } from "../hooks/useStopwatchContext";

const Stopwatch = () => {
  const { seconds, minutes, hours } = useStopwatchContext();
  const renderHours = () => {
    return <span>{`0${hours}`.slice(-2) + " : "}</span>;
  };
  const renderMinutes = () => {
    return <span>{`0${minutes}`.slice(-2) + " : "}</span>;
  };
  const renderSeconds = () => {
    return <span>{`0${seconds}`.slice(-2)}</span>;
  };
  return (
    <div className="Stopwatch">
      {hours > 0 && renderHours()}
      {renderMinutes()}
      {renderSeconds()}
    </div>
  );
};

export default Stopwatch;
