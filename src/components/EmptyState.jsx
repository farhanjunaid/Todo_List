import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MESSAGES = {
  all: {
    title: "No tasks yet",
    subtitle: "Add your first task above to get started.",
  },
  active: {
    title: "All caught up!",
    subtitle: "You have no active tasks right now.",
  },
  completed: {
    title: "Nothing completed yet",
    subtitle: "Finish a task to see it here.",
  },
};

export const EmptyState = ({ filter }) => {
  const { title, subtitle } = MESSAGES[filter] ?? MESSAGES.all;

  return (
    <div className="empty-state">
      <FontAwesomeIcon icon={faClipboardList} className="empty-state__icon" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
