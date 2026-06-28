import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = ({ stats }) => {
  const progress =
    stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100);

  return (
    <header className="header">
      <div className="header__title">
        <span className="header__logo">
          <FontAwesomeIcon icon={faListCheck} />
        </span>
        <div>
          <h1>TodoFlow</h1>
          <p>Stay focused, finish what matters.</p>
        </div>
      </div>

      <div className="header__progress">
        <div className="header__progress-meta">
          <span>{stats.completed} of {stats.total} done</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
};
