import classes from './addTask.module.css';

const SortTask = (props) => {
    return (
        <div className={classes.sortDiv}>
            <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
            <select className={classes.select}>
                <option value="added-date-asc" selected>Added date</option>
                <option value="due-date-desc">Due date</option>
            </select>
            <i class="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
            <i class="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
        </div>
    )
}

export default SortTask;