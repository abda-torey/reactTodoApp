import classes from './addTask.module.css';

const SortTask = (props) => {
    return (
        <div className="col-md-3">
            
        <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Sort</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          
        </div>
    )
}

export default SortTask;