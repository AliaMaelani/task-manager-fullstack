import PropTypes from "prop-types";
import { useTaskStore } from "../store/taskStore";

export const TaskList = ({ title, tasks }) => {
  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {title} - {tasks.length}
      </h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className={`p-3 bg-base-300 rounded-md ${
              task.isDone ? "line-through text-success" : "flex items-center justify-between"
            }`}
          >
            <span className="text-base-content">{task.title}</span>
            {!task.isDone && (
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTask(task._id)}
                  className="btn btn-ghost btn-sm text-success"
                >
                  ✓
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="btn btn-ghost btn-sm text-error"
                >
                  🗑
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
