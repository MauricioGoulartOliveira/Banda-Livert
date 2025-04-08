import { ScheduleItem } from '../types';

interface ScheduleProps {
  items: ScheduleItem[];
}

const Schedule = ({ items }: ScheduleProps) => {
  return (
    <section className="schedule mb-5" id="agenda">
      <h2 className="text-center text-uppercase mb-4">Próximos Shows</h2>
      <div className="row g-4">
        {items.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="schedule-item">
              <h3>{item.date}</h3>
              <p className="location">{item.location}</p>
              <p className="time">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;