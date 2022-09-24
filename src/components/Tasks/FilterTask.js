import classes from './addTask.module.css';
const FilterTask = props => {
    return (
        <div className={classes.filterDiv}>
            <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
            <select className={classes.select}>
                <option value="all" selected>All</option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
                <option value="has-due-date">Has due date</option>
            </select>
        </div>
    )
}

export default FilterTask;